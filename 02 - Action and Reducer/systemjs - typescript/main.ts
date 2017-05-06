/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import { Action, createStore } from 'redux';

const CHANGE_NAME = 'CHANGE_NAME';

interface PayloadAction<T> extends Action {
  payload: T;
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

const store = createStore(reducer);

store.dispatch({
  type: CHANGE_NAME,
  payload: 'Action'
});

document.getElementById('content').innerText = store.getState().name;
