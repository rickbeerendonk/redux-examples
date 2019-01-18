/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import { Action, createStore, Store } from 'redux';
import { addToList } from './helpers';

interface PayloadAction<T> extends Action {
  payload: T;
}

const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_VALUE = 'CHANGE_VALUE';

function changeName(name: string): PayloadAction<string> {
  return {
    type: CHANGE_NAME,
    payload: name
  };
}

function changeValue(value: number): PayloadAction<number> {
  return {
    type: CHANGE_VALUE,
    payload: value
  };
}

interface State {
  name: string;
  value: number;
}

function reducer(state = {name: '', value: 0}, action: Action): State { 
  switch (action.type) {
    case CHANGE_NAME:
      return {...state, name: (<PayloadAction<string>>action).payload};
    case CHANGE_VALUE:
      return {...state, value: (<PayloadAction<number>>action).payload};
    default:
      return state;
  }
}

const store: Store<State> = createStore(reducer);
addToList(JSON.stringify(store.getState()));

store.subscribe(() => {
  addToList(JSON.stringify(store.getState()));
});


store.dispatch(changeName('Multiple Actions and Reducers'));
store.dispatch(changeValue(2017));
