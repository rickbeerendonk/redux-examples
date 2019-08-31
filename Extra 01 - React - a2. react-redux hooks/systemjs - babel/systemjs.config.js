/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global SystemJS */

SystemJS.config({
  meta: {
    '*.jsx': {
      babelOptions: {
        es2015: true,
        react: true
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
    react: 'npm:react/umd/react.development.js',
    'react-dom': 'npm:react-dom/umd/react-dom.development.js',
    'react-redux': 'npm:react-redux',
    redux: 'npm:redux/dist/redux.js'
  },
  packages: {
    '.': {
      defaultExtension: 'jsx'
    },
    './actions': {
      defaultExtension: 'js'
    },
    './constants': {
      defaultExtension: 'js'
    },
    './reducers': {
      defaultExtension: 'js'
    },
    'react-redux': {
      format: 'cjs',
      main: 'dist/react-redux.js'
    }
  },
  transpiler: 'plugin-babel'
});
