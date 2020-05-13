/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import * as types from '../constants/ActionTypes';

const initialState = {
  error: '',
  isFetching: false,
  posts: []
};

function posts(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_FAILURE:
      return { ...state, error: action.error };
    case types.FETCH_POSTS_REQUEST:
      return { ...state, isFetching: action.isFetching };
    case types.FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.posts };
    default:
      return state;
  }
}

export default posts;
