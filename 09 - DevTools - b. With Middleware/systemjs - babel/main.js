/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { addToList } from './helpers';

const logger = store => next => action => {
  // Before state change
  addToList(`[Logger] Dispatching ${JSON.stringify(action)}`, 'logger');

  // Change state by calling next piece of code (or not).
  // Next is either Middleware or change store state.
  // -- Action could be changed before we call next! --
  const result = next(action);

  // After state change
  addToList(`[Logger] Result = ${JSON.stringify(result)}`, 'logger');
  addToList(`[Logger] Next state = ${JSON.stringify(store.getState())}`, 'logger');

  return result
}

const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_VALUE = 'CHANGE_VALUE';

function changeName(name) {
  return {
    type: CHANGE_NAME,
    payload: name
  }
}

function changeValue(value) {
  return {
    type: CHANGE_VALUE,
    payload: value
  }
}

function name(state = '', action) {
  switch (action.type) {
    case CHANGE_NAME:
      return action.payload;
    default:
      return state;
  }
}

function value(state = 0, action) {
  switch (action.type) {
    case CHANGE_VALUE:
      return action.payload;
    default:
      return state;
  }
}

const reducer = combineReducers({
  name,
  value
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer, 
  composeEnhancers(
    applyMiddleware(logger)
  ));
store.subscribe(() => {
  const currentState = store.getState();
  addToList(`${currentState.name} - ${currentState.value}`);
});

store.dispatch(changeName('DevTools (with Middleware)'));
store.dispatch(changeValue(2018));
