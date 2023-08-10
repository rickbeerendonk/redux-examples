/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* global SystemJS */

SystemJS.config({
  meta: {
    typescript: {
      exports: 'ts'
    }
  },
  paths: {
    // paths serve as alias
    'npm:': '../../../../../node_modules/'
  },
  map: {
    '@reduxjs/toolkit': 'npm:@reduxjs/toolkit/dist/index.js',
    immer: 'npm:immer/dist/index.js',
    ts: 'npm:plugin-typescript/lib/plugin.js',
    typescript: 'npm:typescript/lib/typescript.js',
    redux: 'npm:redux/dist/redux.js',
    'redux-thunk': 'npm:redux-thunk/dist/redux-thunk.js',
    //reselect: 'npm:reselect/dist/cjs/reselect.cjs'
    reselect: 'npm:reselect/dist/cjs/reselect.cjs'
  },
  transpiler: 'ts',
  typescriptOptions: {
    tsconfig: true
  }
});
