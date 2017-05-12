/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import { Action, createStore, Store } from 'redux';

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

function name(state = '', action: Action): string {
  switch (action.type) {
    case CHANGE_NAME:
      return (<PayloadAction<string>>action).payload;
    default:
      return state;
  }
}

function value(state = 0, action: Action): number {
  switch (action.type) {
    case CHANGE_VALUE:
      return (<PayloadAction<number>>action).payload;
    default:
      return state;
  }
}

function reducer(state: State = {name: undefined, value: undefined}, action: Action): State { 
  return {
    name: name(state.name, action),
    value: value(state.value, action)
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

store.dispatch(changeName('Splitting Reducers'));
store.dispatch(changeValue(2017));
