/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import {
  Action,
  Dispatch,
  Middleware,
  MiddlewareAPI,
  Store,
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from 'redux';

import { addToList } from './helpers';

const logger: Middleware =
  <S extends Dispatch<Action>>(store: MiddlewareAPI<S>) =>
  (next: Dispatch<Action>) =>
  (action: any) => {
    // Before state change
    addToList(`[Logger] Dispatching ${JSON.stringify(action)}`, 'logger');

    // Change state by calling next piece of code (or not).
    // Next is either Middleware or change store state.
    // -- Action could be changed before we call next! --
    const result = next(action);

    // After state change
    addToList(`[Logger] Result = ${JSON.stringify(result)}`, 'logger');
    addToList(
      `[Logger] Next state = ${JSON.stringify(store.getState())}`,
      'logger'
    );

    return result;
  };

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

const composeEnhancers: Function =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const store: Store<State> = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger))
);
addToList(JSON.stringify(store.getState()));

store.subscribe(() => {
  addToList(JSON.stringify(store.getState()));
});

store.dispatch(changeName('DevTools (with Middleware)'));
store.dispatch(changeValue(2018));
