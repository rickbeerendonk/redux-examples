/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { combineReducers, createStore } from 'redux';
import { addToList } from './helpers';

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

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  const currentState = store.getState();
  addToList(`${currentState.name} - ${currentState.value}`);
});

store.dispatch(changeName('DevTools (without Middleware)'));
store.dispatch(changeValue(2018));
