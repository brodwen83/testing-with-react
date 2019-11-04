import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';

const PostsList = ({ posts }) => {
  useEffect(() => {
    return () => {};
  }, [posts]);
  if (posts.length === 0) return null;

  return (
    <div>
      {posts.map(({ title, body }, index) => {
        return <PostItem title={title} body={body} key={index} />;
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts,
});

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(PostsList);
