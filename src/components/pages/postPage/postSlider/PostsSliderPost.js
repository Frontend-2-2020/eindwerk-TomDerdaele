import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostsSliderPost = ({ post }) => {
  return (
    <div key={post.id} className="Main-post-container">
      <div className="Main-post-container--inner">
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </div>
    </div>
  );
};

PostsSliderPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostsSliderPost;
