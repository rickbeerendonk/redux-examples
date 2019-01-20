/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

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
    'npm:': '../../node_modules/'
  },
  map: {
    'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build':
      'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
    redux: 'npm:redux/dist/redux.js'
  },
  packages: {
    '.': {
      defaultExtension: 'js'
    }
  },
  transpiler: 'plugin-babel'
});
