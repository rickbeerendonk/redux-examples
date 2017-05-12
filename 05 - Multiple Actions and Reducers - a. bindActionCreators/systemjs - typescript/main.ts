/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import { Action, bindActionCreators, createStore, Store } from 'redux';

interface PayloadAction<T> extends Action {
  payload: T;
}

const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_VALUE = 'CHANGE_VALUE';

function changeName(name: string): PayloadAction<string> {
  return {
    type: CHANGE_NAME,
    payload: name
  }
}

function changeValue(value: number): PayloadAction<number> {
  return {
    type: CHANGE_VALUE,
    payload: value
  }
}

interface State {
  name: string;
  value: number;
}

function reducer(state = {name: '', value: 0}, action: Action): State { 
  switch (action.type) {
    case CHANGE_NAME:
      return Object.assign({}, state, {
        name: (<PayloadAction<string>>action).payload
      });
    case CHANGE_VALUE:
      return Object.assign({}, state, {
        value: (<PayloadAction<number>>action).payload
      });
    default:
      return state;
  }
}

const store: Store<State> = createStore(reducer);
store.subscribe(() => {
  let currentState: State = store.getState();
  let text: Text = document.createTextNode(`${currentState.name} - ${currentState.value}`);

  let item: HTMLElement = document.createElement('li');
  item.appendChild(text);

  let list: HTMLElement = document.getElementById('list');
  list.appendChild(item);
});

const boundActionCreators = bindActionCreators({changeName, changeValue}, store.dispatch);

// Can be passed to places that don't know about store / Redux:
boundActionCreators.changeName('boundActionCreators');
boundActionCreators.changeValue(2017);