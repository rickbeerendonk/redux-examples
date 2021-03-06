/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import { bindActionCreators, createStore } from 'redux';

const CHANGE_NAME = 'CHANGE_NAME';

function changeName(name) {
  return {
    type: CHANGE_NAME,
    payload: name
  };
}

function reducer(state = { name: 'Reducer' }, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);
const boundChangeName = bindActionCreators(changeName, store.dispatch);

// Can be passed to places that don't know about store / Redux:
boundChangeName('boundActionCreator');

document.getElementById('content').innerText = store.getState().name;
