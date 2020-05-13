/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';
import { useStoreActions } from 'easy-peasy';

import PostListContainer from './PostListContainer';

function Home() {
  const loadPosts = useStoreActions(actions => actions.posts.loadPosts);

  return (
    <React.Fragment>
      <button onClick={() => loadPosts()}>Fetch</button>
      <br />
      <PostListContainer />
    </React.Fragment>
  );
}

export default Home;
