/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import { Action, bindActionCreators, createStore, Store } from 'redux';

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
const boundChangeName: (name: string) => PayloadAction<string> = bindActionCreators(changeName, store.dispatch);

// Can be passed to places that don't know about store / Redux:
boundChangeName('boundActionCreator');

document.getElementById('content').innerText = store.getState().name;
