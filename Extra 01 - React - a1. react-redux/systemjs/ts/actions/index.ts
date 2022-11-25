/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2019 Rick Beerendonk   !*/

import * as constants from '../constants/name';

// Actions

interface IChangeNameAction {
  type: string;
  payload: string;
}

export function changeName(name: string): IChangeNameAction {
  return {
    type: constants.CHANGE_NAME,
    payload: name
  };
}
