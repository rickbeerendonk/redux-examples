/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017, 2022 Rick Beerendonk    !*/

import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

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

store.dispatch(changeName('Action' /* paylod property */));

document.getElementById('content').innerText = store.getState().name;
