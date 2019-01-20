/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { combineReducers } from 'redux';
import posts from './posts';

const rootReducer = combineReducers({
  posts
});

export default rootReducer;