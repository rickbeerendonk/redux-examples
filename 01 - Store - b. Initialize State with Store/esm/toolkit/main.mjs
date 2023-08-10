/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017, 2022 Rick Beerendonk    !*/

import { createReducer, configureStore } from '@reduxjs/toolkit';

const initialState = 'Reducer';

const reducer = createReducer(initialState, () => {});

const store = configureStore({
  reducer,
  preloadedState: 'CreateStore'
});

document.getElementById('content').innerText = store.getState();
