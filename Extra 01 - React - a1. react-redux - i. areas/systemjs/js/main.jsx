/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import NameEditor from './name/containers/NameEditor';
import ValueEditor from './value/containers/ValueEditor';
import reducer from './reducers/index';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <NameEditor />
    <ValueEditor />
  </Provider>,
  document.getElementById('app')
);
