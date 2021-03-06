import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import moment from "moment";

const PostSlider = ({ post }) => {
  // Afzonderlijk component voor elke post.

  return (
    <div className="main-post-container">
      <div className="main-post-container--inner">
        <div className="main-post-container--inner__link">
          <Link to={`/posts/${post.id}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.1 }}
              className="main-post-container--inner__link__effect--big"
            >
              {post.title}
            </motion.div>
          </Link>
          <div className="name-small">
          <div className="name-small__extra-info">
              {moment(post.created_at).fromNow()}{post.comments_count > 0 ? ` - ${post.comments_count} comments` : " - no comments yet"}
            </div>
            <Link to={`/users/${post.user_id}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ delay: 0.1 }}
                className="main-post-container--inner__link__effect--small"
              >
                by {post.user.first_name} {post.user.last_name}
              </motion.div>
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
