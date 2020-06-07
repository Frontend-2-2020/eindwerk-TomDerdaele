import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostSlider = ({ post }) => {
  // Afzonderlijk component voor elke post.

  return (
    <div className="main-post-container">
      <div className="main-post-container--inner">
        <div className="link">
          <Link to={`/posts/${post.id}`}>
            <div>{post.title}</div>
          </Link>
          <div className="date-small">
            <Link to={`/users/${post.user_id}`}>
              by {post.user.first_name} {post.user.last_name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

PostSlider.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostSlider;
