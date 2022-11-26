/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { createSlice } from '@reduxjs/toolkit';

const initialState = 'React';

const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    change: (state, action) => action.payload
  }
});

export const { change } = nameSlice.actions;
export default nameSlice.reducer;
