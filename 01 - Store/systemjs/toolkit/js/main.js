/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017, 2022 Rick Beerendon     !*/

import { createReducer, configureStore } from '@reduxjs/toolkit';

const reducer = createReducer(undefined, () => {});

const store = configureStore({
  reducer
});

document.getElementById('content').innerText = store.getState();
