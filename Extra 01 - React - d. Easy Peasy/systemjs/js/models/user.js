/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { action } from 'easy-peasy';

const userModel = {
  name: '',

  // Actions allow writing mutable code,
  // because Immer (under the covers) will
  // change this into immutable changes.
  changeName: action((state, payload) => {
    state.name = payload;
  })
};

export default userModel;
