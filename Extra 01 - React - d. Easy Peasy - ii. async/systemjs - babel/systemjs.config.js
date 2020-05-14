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
    debounce: 'npm:debounce/index.js',
    'easy-peasy': 'npm:easy-peasy/dist/easy-peasy.umd.development.js',
    'immer-peasy': 'npm:immer-peasy/dist/immer.umd.js',
    'is-plain-object': 'npm:is-plain-object/index.cjs.js',
    isobject: 'npm:isobject/index.js',
    memoizerific: 'npm:memoizerific/memoizerific.js',
    'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build':
      'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
    react: 'npm:react/umd/react.development.js',
    'react-dom': 'npm:react-dom/umd/react-dom.development.js',
    'react-redux': 'npm:react-redux',
    redux: 'npm:redux/dist/redux.js',
    'redux-thunk': 'npm:redux-thunk/dist/redux-thunk.js'
  },
  packages: {
    '.': {
      defaultExtension: 'jsx'
    },
    './models': {
      defaultExtension: 'js'
    }
  },
  transpiler: 'plugin-babel'
});
