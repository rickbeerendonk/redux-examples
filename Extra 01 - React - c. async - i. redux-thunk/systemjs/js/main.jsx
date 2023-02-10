/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers/index';
import Home from './containers/Home';

//import { fetchPosts } from './actions/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// Fetch immediately.
//store.dispatch(fetchPosts());

ReactDOM.createRoot(document.getElementById('app')).render(
  <Provider store={store}>
    <Home />
  </Provider>
);
