/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { action, computed } from 'easy-peasy';

const userModel = {
  name: '',

  // Computed properties, only computed when
  // - used (lazy evaluation)
  // - dependencies change (cache)
  upperCaseName: computed(state => state.name.toUpperCase()),

  changeName: action((state, payload) => {
    state.name = payload;
  })
};

export default userModel;
