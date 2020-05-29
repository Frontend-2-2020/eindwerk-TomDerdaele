import React from 'react';
import PropTypes from 'prop-types';
import { DELETE_COMMENT, SET_EDIT_COMMENT } from '../../../../redux/actions/actionTypes';
import DeleteChangeButton from '../../../layout/buttons/deleteChangeButton/DeleteChangeButton';


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
    <div className="deletechangebutton-container">
                <DeleteChangeButton
                  buttonData={commentData}
                  clickFunctie={DELETE_COMMENT}
                  buttonText="Delete comment"
                />
                <DeleteChangeButton
                  buttonData={commentData}
                  clickFunctie={SET_EDIT_COMMENT}
                  buttonText="Edit comment"
                />
              </div>

    {/* <PrivateButtonComment what={commentData} buttonText="Delete comment"/>
      <PrivateButtonEditComment what={commentData} buttonText="Edit comment"/> */}
  </li>
  );
};

PostDetailCommentItem.propTypes = {
  commentData: PropTypes.object.isRequired,
};


export default PostDetailCommentItem;