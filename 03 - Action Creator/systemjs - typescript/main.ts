/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import { Action, createStore, Store } from 'redux';

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

function reducer(state = { name: 'Reducer' }, action: Action): State {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: (<PayloadAction<string>>action).payload };
    default:
      return state;
  }
}

const store: Store<State> = createStore(reducer);

store.dispatch(changeName('ActionCreator'));

document.getElementById('content').innerText = store.getState().name;
