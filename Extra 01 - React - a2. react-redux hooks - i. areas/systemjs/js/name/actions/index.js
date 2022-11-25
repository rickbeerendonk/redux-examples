/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import * as types from '../constants/ActionTypes';

export function change(name) {
  return {
    type: types.CHANGE,
    payload: name
  };
}
