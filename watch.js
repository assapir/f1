require('esbuild').serve({
  servedir: 'public',
}, {
  entryPoints: ['src/index.jsx'],
  outdir: 'public/js',
  bundle: true,
}).then(server => {
      console.info(`listening on ${server.host}:${server.port}`);
  }).catch(err => {
      console.error(err?.message);
      process.exit(1);
  });
