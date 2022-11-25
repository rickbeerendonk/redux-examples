/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017, 2022 Rick Beerendonk    !*/

import { bindActionCreators } from 'redux';
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
const boundChangeName = bindActionCreators(changeName, store.dispatch);

// Can be passed to places that don't know about store / Redux:
boundChangeName('boundActionCreator' /* payload */);

document.getElementById('content').innerText = store.getState().name;
