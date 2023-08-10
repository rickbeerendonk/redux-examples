/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { createReducer } from '@reduxjs/toolkit';

import { changeName } from '../actions/index';

const initialState = 'React';

const reducer = createReducer(initialState, builder => {
  builder.addCase(changeName, (state, action) => action.payload);
});

export default reducer;
