/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { fetch } from 'slow-fetch';

import * as types from '../constants/ActionTypes';

export function fetchPostsRequest(isFetching) {
  return {
    type: types.FETCH_POSTS_REQUEST,
    isFetching
  };
}

export function fetchPostsFailure(error) {
  return {
    type: types.FETCH_POSTS_FAILURE,
    error
  };
}

export function fetchPostsSuccess(json) {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    posts: json
  };
}

export function fetchPosts() {
  // Thunk middleware can handle functions.
  // It calls the function and passes dispatch.
  return function (dispatch) {
    dispatch(fetchPostsRequest(true));

    // Thunk middleware can also handle a return value,
    // that is passed on as the return value of the dispatch method.
    // Here we return a promise to wait for.
    return fetch('resources/posts.json')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        dispatch(fetchPostsSuccess(json));
      })
      .catch(error => {
        dispatch(fetchPostsFailure(error.message));
      })
      .finally(() => {
        dispatch(fetchPostsRequest(false));
      });
  };
}
