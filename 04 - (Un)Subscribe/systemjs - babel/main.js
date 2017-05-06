/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import { createStore } from 'redux';

const CHANGE_NAME = 'CHANGE_NAME';

function changeName(name) {
  return {
    type: CHANGE_NAME,
    payload: name
  }
}

function reducer(state = {name: 'Reducer'}, action) { 
  switch (action.type) {
    case CHANGE_NAME:
      return Object.assign({}, state, {name: action.payload});
    default:
      return state;
  }
}

const store = createStore(reducer);
const unsubscribe = store.subscribe(() => {
  let item = document.createElement('li');
  let list = document.getElementById('list');

  let name = store.getState().name;
  let text = document.createTextNode(name);
  item.appendChild(text);
  list.appendChild(item);
});

store.dispatch(changeName('Visible 1'));
store.dispatch(changeName('Visible 2'));

unsubscribe();

store.dispatch(changeName('Invisible 3'));
