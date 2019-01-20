/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import * as types from '../constants/ActionTypes';

export function changeName(name) {
  return {
    type: types.CHANGE_NAME,
    payload: name
  };
}