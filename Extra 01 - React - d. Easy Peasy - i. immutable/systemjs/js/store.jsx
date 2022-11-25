/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createStore } from 'easy-peasy';

import userModel from './models/user';

const store = createStore(
  {
    user: userModel
  },
  {
    disableImmer: true // Don't allow writing mutable state changes in actions
  }
);

export default store;
