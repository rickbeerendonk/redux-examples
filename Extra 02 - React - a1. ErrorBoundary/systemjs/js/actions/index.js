/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import * as types from '../constants/ActionTypes';

export function changeDenominator(value) {
  return {
    type: types.CHANGE_DENOMINATOR,
    payload: value
  };
}

export function changeNumerator(value) {
  return {
    type: types.CHANGE_NUMERATOR,
    payload: value
  };
}
