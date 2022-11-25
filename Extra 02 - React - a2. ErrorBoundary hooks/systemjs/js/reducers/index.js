/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { combineReducers } from 'redux';
import denominator from './denominator';
import numerator from './numerator';

const rootReducer = combineReducers({
  denominator,
  numerator
});

export default rootReducer;
