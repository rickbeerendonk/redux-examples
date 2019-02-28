/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2019 Rick Beerendonk   !*/

import { AnyAction } from 'redux';

import * as constants from '../constants/name';

// Interfaces

export interface ChangeName extends AnyAction {
  type: constants.CHANGE_NAME;
  payload: string;
}

// Actions

export function changeName(name: string): ChangeName {
  return {
    type: constants.CHANGE_NAME,
    payload: name
  };
}

// Actions Group

export type NameActions = ChangeName;
