/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import { Action, combineReducers, createStore, Store } from 'redux';
import { addToList } from './helpers';

interface PayloadAction<T> extends Action {
  payload: T;
}

// Name

const CHANGE_NAME = 'CHANGE_NAME';

function changeName(name: string): PayloadAction<string> {
  return {
    type: CHANGE_NAME,
    payload: name
  };
}

function name(state = '', action: Action): string {
  switch (action.type) {
    case CHANGE_NAME:
      return (<PayloadAction<string>>action).payload;
    default:
      return state;
  }
}

// Value

const CHANGE_VALUE = 'CHANGE_VALUE';

function changeValue(value: number): PayloadAction<number> {
  return {
    type: CHANGE_VALUE,
    payload: value
  };
}

function value(state = 0, action: Action): number {
  switch (action.type) {
    case CHANGE_VALUE:
      return (<PayloadAction<number>>action).payload;
    default:
      return state;
  }
}

// Combine

interface State {
  name: string;
  value: number;
}

const reducer = combineReducers<State>({
  name,
  value
});

const store: Store<State> = createStore(reducer);
addToList(JSON.stringify(store.getState()));

store.subscribe(() => {
  addToList(JSON.stringify(store.getState()));
});

store.dispatch(changeName('combineReducers'));
store.dispatch(changeValue(2017));
