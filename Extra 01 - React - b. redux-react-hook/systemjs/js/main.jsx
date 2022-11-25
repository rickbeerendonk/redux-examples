/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook';
import { createStore } from 'redux';

import GreetingEditor from './containers/GreetingEditor';
import reducer from './reducers/index';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <GreetingEditor />
  </StoreContext.Provider>,
  document.getElementById('app')
);
