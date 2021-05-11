require('esbuild').build({
    entryPoints: ['src/index.jsx'],
    bundle: true,
    outfile: 'build/index.js',
    minify: true,
    define: {
      NODE_ENV: 'production'
    }
  }).then((result => {
      if (result.errors.length) {
          console.error(`Errors: ${result.errors.map(err => `${err.text}\n`)}`);
      }
      if (result.warnings.length) {
        console.warn(`Errors: ${result.warnings.map(warn => `${warn.text}\n`)}`);
      }
  })).catch(() => process.exit(1));
