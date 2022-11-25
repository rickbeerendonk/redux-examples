/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { combineReducers } from 'redux';
import name from '../name/reducers/index';
import value from '../value/reducers/index';

const rootReducer = combineReducers({
  name,
  value
});

export default rootReducer;
