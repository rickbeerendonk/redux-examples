/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Action, Store, combineReducers, createStore } from 'redux';

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

const reducer = combineReducers<State>({
  name,
  value
});

const store: Store<State> = createStore(
  reducer,
  window['__REDUX_DEVTOOLS_EXTENSION__'] &&
    window['__REDUX_DEVTOOLS_EXTENSION__']()
);
addToList(JSON.stringify(store.getState()));

store.subscribe(() => {
  addToList(JSON.stringify(store.getState()));
});

store.dispatch(changeName('DevTools (without Middleware)'));
store.dispatch(changeValue(2018));
