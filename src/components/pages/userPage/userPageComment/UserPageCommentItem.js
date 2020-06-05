import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./UserPageCommentItem.css"

const UserPageCommentItem = ({ commentData }) => {
  return (
    <li className="userpage-container__commentlist__item">
      <div
        className="userpage-container__commentlist__item__streep"
        style={{
          backgroundColor: "#EB4511",
        }}
      ></div>

      <div className="userpage-container__commentlist__item__body" dangerouslySetInnerHTML={{__html: commentData.body}}/>

      <Link to={`/posts/${commentData.blog_post.id}`}>
        <p className="userpage-container__commentlist__item__title">
          at {commentData.blog_post.title}
        </p>
      </Link>
      <p className="userpage-container__commentlist__item__date">
        {commentData.blog_post.updated_at}
      </p>
    </li>
  );
};

UserPageCommentItem.propTypes = {
  commentData: PropTypes.object.isRequired,
};

export default UserPageCommentItem;
