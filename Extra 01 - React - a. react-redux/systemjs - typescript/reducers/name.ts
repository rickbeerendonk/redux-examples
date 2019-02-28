/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2019 Rick Beerendonk   !*/

import { NameActions } from '../actions/name';
import { CHANGE_NAME } from '../constants/name';

const initialState = 'React';

export default function name(
  state = initialState,
  action: NameActions
): string {
  switch (action.type) {
    case CHANGE_NAME:
      return action.payload;
    default:
      return state;
  }
}
