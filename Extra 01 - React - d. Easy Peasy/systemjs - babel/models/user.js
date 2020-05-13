/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { action } from 'easy-peasy';

const userModel = {
  name: '',
  changeName: action((state, payload) => {
    state.name = payload;
  })
};

export default userModel;
