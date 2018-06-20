/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import { Action, createStore, Store, Unsubscribe } from 'redux';
import { addToList } from './helpers';

interface PayloadAction<T> extends Action {
  payload: T;
}

const CHANGE_NAME = 'CHANGE_NAME';

function changeName(name: string): PayloadAction<string> {
  return {
    type: CHANGE_NAME,
    payload: name
  };
}

interface State {
  name: string;
}

function reducer(state = {name: 'Reducer'}, action: Action): State { 
  switch (action.type) {
    case CHANGE_NAME:
      return Object.assign({}, state, {name: (<PayloadAction<string>>action).payload});
    default:
      return state;
  }
}

const store: Store<State> = createStore(reducer);
const unsubscribe: Unsubscribe = store.subscribe(() => {
  const name: string = store.getState().name;
  addToList(name);
});

store.dispatch(changeName('Visible 1'));
store.dispatch(changeName('Visible 2'));

unsubscribe();

store.dispatch(changeName('Invisible 3'));
