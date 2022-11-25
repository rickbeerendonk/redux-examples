/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* global SystemJS */

SystemJS.config({
  typescriptOptions: {
    // Copy of compiler options in standard tsconfig.json
    target: 'es5',
    module: 'system',
    sourceMap: true,
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    lib: ['es2015', 'dom'],
    noImplicitAny: true,
    suppressImplicitAnyIndexErrors: false
  },
  meta: {
    typescript: {
      exports: 'ts'
    }
  },
  paths: {
    // paths serve as alias
    'npm:': '../../../../node_modules/'
  },
  map: {
    ts: 'npm:plugin-typescript/lib/plugin.js',
    typescript: 'npm:typescript/lib/typescript.js',
    redux: 'npm:redux/dist/redux.js'
  },
  transpiler: 'ts'
});
