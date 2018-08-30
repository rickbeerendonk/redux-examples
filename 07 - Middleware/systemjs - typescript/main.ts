/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { 
  Action, Dispatch, Middleware, MiddlewareAPI, Store,
  applyMiddleware, combineReducers, createStore
} from 'redux';

import { addToList } from './helpers';

const logger: Middleware = <S extends Dispatch<Action>>(store: MiddlewareAPI<S>) => (next: Dispatch<Action>) => (action: any) => {
  // Before state change
  addToList(`[Logger] Dispatching ${JSON.stringify(action)}`, 'logger');

  // Change state by calling next piece of code (or not).
  // Next is either Middleware or change store state.
  // -- Action could be changed before we call next! --
  const result = next(action);

  // After state change
  addToList(`[Logger] Result = ${JSON.stringify(result)}`, 'logger');
  addToList(`[Logger] Next state = ${JSON.stringify(store.getState())}`, 'logger');

  return result;
};

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

interface State {
  name: string;
  value: number;
}

const reducer = combineReducers<State>({
  name,
  value
});

const store: Store<State> = createStore(reducer, applyMiddleware(logger));
store.subscribe(() => {
  let currentState: State = store.getState();
  addToList(`${currentState.name} - ${currentState.value}`);
});

store.dispatch(changeName('Middleware'));
store.dispatch(changeValue(2018));
