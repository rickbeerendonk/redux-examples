/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2019 Rick Beerendonk   !*/

/* global SystemJS */

SystemJS.config({
  typescriptOptions: {
    // Copy of compiler options in standard tsconfig.json
    target: 'es5',
    module: 'system',
    sourceMap: true,
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    jsx: 'react',
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
    'npm:': '../../node_modules/'
  },
  map: {
    ts: 'npm:plugin-typescript/lib/plugin.js',
    typescript: 'npm:typescript/lib/typescript.js',
    react: 'npm:react/umd/react.development.js',
    'react-dom': 'npm:react-dom/umd/react-dom.development.js',
    'react-redux': 'npm:react-redux',
    redux: 'npm:redux/dist/redux.js'
  },
  packages: {
    '.': {
      defaultExtension: 'tsx'
    },
    './actions': {
      defaultExtension: 'ts'
    },
    './constants': {
      defaultExtension: 'ts'
    },
    './reducers': {
      defaultExtension: 'ts'
    },
    './types': {
      defaultExtension: 'ts'
    },
    'react-redux': {
      format: 'cjs',
      main: 'dist/react-redux.js'
    }
  },
  transpiler: 'ts'
});
