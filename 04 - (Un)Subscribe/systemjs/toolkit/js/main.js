/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017, 2022 Rick Beerendonk    !*/

import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';
import { addToList } from './helpers';

// Actions

const changeName = createAction('CHANGE_NAME');

// Reducer

const initialState = { name: 'Reducer' };

const reducer = createReducer(initialState, builder => {
  builder.addCase(changeName, (state, action) => {
    state.name = action.payload;
  });
});

// Store

const store = configureStore({
  reducer
});
const unsubscribe = store.subscribe(() => {
  const name = store.getState().name;
  addToList(name);
});

store.dispatch(changeName('Visible 1'));
store.dispatch(changeName('Visible 2'));

unsubscribe();

store.dispatch(changeName('Invisible 3'));
