/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { fetchPosts } from './actions/index';
import reducer from './reducers/index';

import PostListContainer from './containers/PostListContainer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer, 
  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  )
);

store.dispatch(fetchPosts());

ReactDOM.render(
  <Provider store={store}>
    <PostListContainer />
  </Provider>,
  document.getElementById('app')
);