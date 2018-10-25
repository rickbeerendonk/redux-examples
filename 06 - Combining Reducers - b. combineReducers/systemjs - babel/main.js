/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import { combineReducers, createStore } from 'redux';
import { addToList } from './helpers';

const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_VALUE = 'CHANGE_VALUE';

function changeName(name) {
  return {
    type: CHANGE_NAME,
    payload: name
  };
}

function changeValue(value) {
  return {
    type: CHANGE_VALUE,
    payload: value
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

const store = createStore(reducer);
addToList(JSON.stringify(store.getState()));

store.subscribe(() => {
  addToList(JSON.stringify(store.getState()));
});

store.dispatch(changeName('combineReducers'));
store.dispatch(changeValue(2017));
