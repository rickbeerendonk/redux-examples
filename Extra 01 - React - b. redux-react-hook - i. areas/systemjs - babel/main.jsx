/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook';
import { createStore } from 'redux';

import GreetingEditor from './name/containers/GreetingEditor';
import ValueEditor from './value/containers/ValueEditor';
import reducer from './reducers/index';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <GreetingEditor />
    <ValueEditor />
  </StoreContext.Provider>,
  document.getElementById('app')
);
