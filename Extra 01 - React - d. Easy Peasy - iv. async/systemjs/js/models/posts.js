/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { action, thunk } from 'easy-peasy';

const postsModel = {
  error: '',
  isFetching: false,
  posts: [],
  setFailure: action((state, payload) => {
    state.error = payload;
  }),
  setFetching: action((state, payload) => {
    state.isFetching = payload;
  }),
  setPosts: action((state, payload) => {
    state.posts = payload;
  }),
  loadPosts: thunk(async (actions /*, payload */) => {
    try {
      actions.setFetching(true);
      const response = await fetch('resources/posts.json');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      actions.setPosts(json);
    } catch (error) {
      actions.setFailure(error.message);
    } finally {
      actions.setFetching(false);
    }
  })
};

export default postsModel;
