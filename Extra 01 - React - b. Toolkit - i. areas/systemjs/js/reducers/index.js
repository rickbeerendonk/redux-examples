/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { combineReducers } from 'redux';
import name from '../name/slices/index';
import value from '../value/slices/index';

const rootReducer = combineReducers({
  name,
  value
});

export default rootReducer;
