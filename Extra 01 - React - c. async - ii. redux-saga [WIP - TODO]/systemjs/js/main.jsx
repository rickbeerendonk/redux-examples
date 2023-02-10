/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers/index';
import Home from './containers/Home';
import mySaga from './sagas/sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(createSagaMiddleware))
);
// then run the saga
sagaMiddleware.run(mySaga);

ReactDOM.createRoot(document.getElementById('app')).render(
  <Provider store={store}>
    <Home />
  </Provider>
);
