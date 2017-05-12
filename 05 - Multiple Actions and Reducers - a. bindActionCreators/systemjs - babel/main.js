/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import { bindActionCreators, createStore } from 'redux';

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
store.subscribe(() => {
  let currentState = store.getState();
  let text = document.createTextNode(`${currentState.name} - ${currentState.value}`);

  let item = document.createElement('li');
  item.appendChild(text);

  let list = document.getElementById('list');
  list.appendChild(item);
});

const boundActionCreators = bindActionCreators({changeName, changeValue}, store.dispatch);

// Can be passed to places that don't know about store / Redux:
boundActionCreators.changeName('boundActionCreators');
boundActionCreators.changeValue(2017);
