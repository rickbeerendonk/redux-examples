/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { CHANGE_NUMERATOR } from '../constants/ActionTypes';

const initialState = 3;

export default function name(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NUMERATOR:
      return action.payload;
    default:
      return state;
  }
}
