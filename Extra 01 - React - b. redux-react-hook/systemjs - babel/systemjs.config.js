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
    redux: 'npm:redux/dist/redux.js',
    'redux-react-hook': 'npm:redux-react-hook/dist/index.js'
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
    }
  },
  transpiler: 'plugin-babel'
});
