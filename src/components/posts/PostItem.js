import React from 'react';
import PropTypes from 'prop-types';

const PostItem = ({ title, body }) => {
  if (!title) return null;

  return (
    <div data-test='postItemComponent'>
      <h2 data-test='componentTitle'>{title}</h2>
      <p data-test='componentBody'>{body}</p>
    </div>
  );
};

PostItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default PostItem;
