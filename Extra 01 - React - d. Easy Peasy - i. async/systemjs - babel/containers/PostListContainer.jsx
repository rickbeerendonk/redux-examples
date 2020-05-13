/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { useStoreState } from 'easy-peasy';

import ErrorMessage from '../components/ErrorMessage';
import Fetching from '../components/Fetching';
import PostList from '../components/PostList';

// Container pattern:
// Container fetches data, then renders the sub-component.
function PostListContainer() {
  const error = useStoreState(state => state.posts.error);
  const isFetching = useStoreState(state => state.posts.isFetching);
  const posts = useStoreState(state => state.posts.posts);

  return (
    <React.Fragment>
      {isFetching && <Fetching />}

      {error ? <ErrorMessage message={error} /> : <PostList posts={posts} />}
    </React.Fragment>
  );
}

export default PostListContainer;
