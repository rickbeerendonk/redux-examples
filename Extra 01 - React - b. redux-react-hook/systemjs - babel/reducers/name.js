/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { CHANGE_NAME } from '../constants/ActionTypes';

const initialState = 'React';

export default function name(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return action.payload;
    default:
      return state;
  }
}
