const { build } = require('esbuild');
const { dependencies, peerDependencies } = require('./package.json');
const { Generator } = require('npm-dts');

new Generator({
  entry: 'src/index.txs',
  output: 'dist/index.d.ts',
}).generate();

const sharedConfig = {
  entryPoints: ['src/index.tsx'],
  bundle: true,
  minify: true,
  external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
};

build({
  ...sharedConfig,
  platform: 'node', // for CJS
  outfile: 'dist/index.js',
});

build({
  ...sharedConfig,
  outfile: 'dist/index.esm.js',
  platform: 'neutral', // for ESM
  format: 'esm',
});

// const esbuild = require('esbuild');
// const { nodeExternalsPlugin } = require('esbuild-node-externals');
// esbuild
//   .build({
//     entryPoints: ['./src/index.tsx'],
//     outfile: 'dist/index.js',
//     bundle: true,
//     minify: true,
//     treeShaking: true,
//     platform: 'node',
//     format: 'cjs',
//     target: 'node14',
//     plugins: [nodeExternalsPlugin()],
//   })
//   .catch(() => process.exit(1));
