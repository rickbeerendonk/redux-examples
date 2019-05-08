/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2019 Rick Beerendonk   !*/

import * as constants from '../constants/name';

// Interfaces

export interface ChangeNameAction {
  type: typeof constants.CHANGE_NAME;
  payload: string;
}

// Actions

export function changeName(name: string): ChangeNameAction {
  return {
    type: constants.CHANGE_NAME,
    payload: name
  };
}

// Actions Group

export type NameActions = ChangeNameAction;
