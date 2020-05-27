import React from 'react';
import PropTypes from 'prop-types';


const PostDetailCommentItem = ({commentData}) => {
  return (
    <li className="postdetail-page-container__commentlist__item">
    <p>
      {commentData.user
        ? commentData.user.first_name + " " + commentData.user.last_name
        : ""}
    </p>
    <h3>{commentData.created_at}</h3>
    <p>{commentData.body}</p>
    {/* <PrivateButtonComment what={commentData} buttonText="Delete comment"/>
      <PrivateButtonEditComment what={commentData} buttonText="Edit comment"/> */}
  </li>
  );
};

PostDetailCommentItem.propTypes = {
  commentData: PropTypes.object.isRequired,
};


export default PostDetailCommentItem;