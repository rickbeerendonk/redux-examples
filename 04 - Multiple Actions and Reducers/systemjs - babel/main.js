/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import { createStore } from 'redux';

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

function reducer(state = {}, action) { 
  switch (action.type) {
    case CHANGE_NAME:
      return Object.assign({}, state, {
        name: action.payload
      });
    case CHANGE_VALUE:
      return Object.assign({}, state, {
        value: action.payload
      });
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(changeName('Multiple Actions and Reducers'));
store.dispatch(changeValue(2017));

let currentState = store.getState();
document.getElementById('content').innerText = 
  `${currentState.name} - ${currentState.value}`;