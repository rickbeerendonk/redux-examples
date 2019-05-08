/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2019 Rick Beerendonk   !*/

import * as constants from '../constants/name';

// Actions

export function changeName(name: string) {
  return {
    type: constants.CHANGE_NAME,
    payload: name
  };
}
