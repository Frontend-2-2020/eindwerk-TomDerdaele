import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostsSliderPost = ({post}) => {
  return (
    <div key={post.id} className="Main-post-container">
      <Link to={`/posts/${post.id}`} className="Main-post-container--inner">
        <div>
          {post.title}
        </div>
      </Link>
    </div>
  );
};

PostsSliderPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostsSliderPost;