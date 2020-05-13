/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createStore } from 'easy-peasy';

import postsModel from './models/posts';

const store = createStore({
  posts: postsModel
});

export default store;
