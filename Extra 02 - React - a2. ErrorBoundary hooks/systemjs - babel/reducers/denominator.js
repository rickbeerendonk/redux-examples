/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { CHANGE_DENOMINATOR } from '../constants/ActionTypes';

const initialState = 2;

export default function name(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DENOMINATOR:
      return action.payload;
    default:
      return state;
  }
}
