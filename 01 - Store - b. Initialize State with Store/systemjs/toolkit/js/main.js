/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017, 2022 Rick Beerendonk    !*/

import { configureStore } from '@reduxjs/toolkit';

function reducer(state = 'Reducer') {
  return state;
}

const store = configureStore({
  reducer,
  preloadedState: 'CreateStore'
});

document.getElementById('content').innerText = store.getState();
