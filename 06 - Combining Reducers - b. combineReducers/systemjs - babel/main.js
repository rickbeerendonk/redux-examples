/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import { combineReducers, createStore } from 'redux';
import { addToList } from './helpers';

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

const store = createStore(reducer);
addToList(JSON.stringify(store.getState()));

store.subscribe(() => {
  addToList(JSON.stringify(store.getState()));
});

store.dispatch(changeName('combineReducers'));
store.dispatch(changeValue(2017));
