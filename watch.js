const esbuild = require('esbuild');
const { createServer, request } = require('http')
const { spawn } = require('child_process')

const clients = []

esbuild.serve({
  servedir: 'public',
}, {
}).then(server => {
  const address = `http://${server.host}:3000`;

  createServer((req, res) => {
    const { url, method, headers } = req
    if (req.url === '/esbuild')
      return clients.push(
        res.writeHead(200, {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          Connection: 'keep-alive',
        })
      )
    const path = ~url.split('/').pop().indexOf('.') ? url : `/index.html` //for PWA with router
    req.pipe(
      request({ hostname: server.host, port: server.port, path, method, headers }, (prxRes) => {
        res.writeHead(prxRes.statusCode, prxRes.headers)
        prxRes.pipe(res, { end: true })
      }),
      { end: true }
    )
  }).listen(3000)

  setTimeout(() => {
    const op = { darwin: ['open'], linux: ['xdg-open'], win32: ['cmd', '/c', 'start'] }
    if (clients.length === 0) {
      const command = op[process.platform][0]
      spawn(command, [`${address}`])
    }
  }, 1000)
  console.info(`listening on ${address}`);
}).catch(err => {
  console.error(err?.message);
  process.exit(1);
});


esbuild
  .build({
    entryPoints: ['src/index.jsx'],
    outdir: 'public/js',
    sourcemap: 'inline',
    logLevel: 'info',
    target: ['esnext'],
    footer: { js: '(() => new EventSource("/esbuild").onmessage = () => location.reload())();' },
    watch: {
      onRebuild(error, result) {
        clients.forEach((res) => res.write('data: update\n\n'))
        clients.length = 0
        if (error) {
          console.error('watch build failed:', error);
          throw error
        }
        console.log(`rebuild succeeded. errors: ${result.errors.length}, warnings: ${result.warnings.length}`);
      },
    },
  })
  .catch(err => {
    console.error(err?.message);
    process.exit(1);
  });
