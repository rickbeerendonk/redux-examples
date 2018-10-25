/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { addToList } from './helpers';

const logger = store => next => action => {
  // Before state change
  addToList(`[Logger] Previous state = ${JSON.stringify(store.getState())}`, 'logger');
  addToList(`[Logger] Dispatching ${JSON.stringify(action)}`, 'logger');

  // Change state by calling next piece of code (or not).
  // Next is either Middleware or change store state.
  // -- Action could be changed before we call next! --
  const result = next(action);

  // After state change
  addToList(`[Logger] Result = ${JSON.stringify(result)}`, 'logger');
  addToList(`[Logger] Next state = ${JSON.stringify(store.getState())}`, 'logger');

  return result;
};

// Name

const CHANGE_NAME = 'CHANGE_NAME';

function changeName(name) {
  return {
    type: CHANGE_NAME,
    payload: name
  };
}

function name(state = '', action) {
  switch (action.type) {
    case CHANGE_NAME:
      return action.payload;
    default:
      return state;
  }
}

// Value

const CHANGE_VALUE = 'CHANGE_VALUE';

function changeValue(value) {
  return {
    type: CHANGE_VALUE,
    payload: value
  };
}

function value(state = 0, action) {
  switch (action.type) {
    case CHANGE_VALUE:
      return action.payload;
    default:
      return state;
  }
}

// Combine

const reducer = combineReducers({
  name,
  value
});

const store = createStore(reducer, applyMiddleware(logger));
addToList(JSON.stringify(store.getState()));

store.subscribe(() => {
  addToList(JSON.stringify(store.getState()));
});

store.dispatch(changeName('Middleware'));
store.dispatch(changeValue(2018));
