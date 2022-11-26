/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const valueSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    change: (state, action) => action.payload
  }
});

export const { change } = valueSlice.actions;
export default valueSlice.reducer;
