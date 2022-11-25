/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createStore } from 'easy-peasy';

import userModel from './models/user';

const store = createStore(
  {
    user: userModel
  },
  {
    // This could be loaded from the last session
    initialState: {
      user: {
        name: 'World'
      }
    }
  }
);

export default store;
