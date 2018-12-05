/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';
import { connect } from 'react-redux';

import ErrorMessage from '../components/ErrorMessage';
import Fetching from '../components/Fetching';
import PostList from '../components/PostList';

// Container pattern:
// Container fetches data, then renders the sub-component.
class PostListContainer extends React.Component {
  render() {
    const { error, isFetching, posts } = this.props;

    return (
      <React.Fragment>
        {isFetching && <Fetching />}

        {error ? (
          <ErrorMessage message={error} />
        ) : (
          <PostList posts={posts} />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  error: state.posts.error,
  isFetching: state.posts.isFetching,
  posts: state.posts.posts
});

export default connect(
  mapStateToProps
)(PostListContainer);