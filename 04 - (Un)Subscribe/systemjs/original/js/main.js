/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import { createStore } from 'redux';
import { addToList } from './helpers';

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
const unsubscribe = store.subscribe(() => {
  const name = store.getState().name;
  addToList(name);
});

store.dispatch(changeName('Visible 1'));
store.dispatch(changeName('Visible 2'));

unsubscribe();

store.dispatch(changeName('Invisible 3'));
