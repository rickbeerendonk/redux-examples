/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017, 2022 Rick Beerendonk    !*/

/* global SystemJS */

SystemJS.config({
  meta: {
    '*.js': {
      babelOptions: {
        es2015: true
      }
    }
  },
  paths: {
    // paths serve as alias
    'npm:': '../../../../node_modules/'
  },
  map: {
    '@reduxjs/toolkit': 'npm:@reduxjs/toolkit/dist/index.js',
    'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build':
      'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
    immer: 'npm:immer/dist/index.js',
    'react-redux': 'npm:react-redux',
    redux: 'npm:redux/dist/redux.js',
    'redux-thunk': 'npm:redux-thunk/dist/redux-thunk.js',
    reselect: 'npm:reselect/dist/reselect.js'
  },
  packages: {
    '.': {
      defaultExtension: 'js'
    }
  },
  transpiler: 'plugin-babel'
});
