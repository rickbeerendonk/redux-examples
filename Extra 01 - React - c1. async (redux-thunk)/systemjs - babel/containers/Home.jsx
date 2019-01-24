/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../actions/index';
import PostListContainer from './PostListContainer';

function Home({ fetch }) {
  return (
    <React.Fragment>
      <button onClick={() => fetch()}>Fetch</button>
      <br />
      <PostListContainer />
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  fetch: bindActionCreators(fetchPosts, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
