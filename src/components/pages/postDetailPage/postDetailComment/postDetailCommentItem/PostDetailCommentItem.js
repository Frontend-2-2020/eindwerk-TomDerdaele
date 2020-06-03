import React from "react";
import PropTypes from "prop-types";
import {
  DELETE_COMMENT,
  SET_EDIT_COMMENT,
} from "../../../../../redux/actions/actionTypes";
import DeleteChangeButton from "../../../../layout/buttons/deleteChangeButton/DeleteChangeButton";
import "./PostDetailCommentItem.css";
import { connect } from "react-redux";

const PostDetailCommentItem = ({ commentData, auth }) => {
  return (
    <li className="postdetail-page-container__commentlist__item">
      <div className="postdetail-page-container__commentlist__item__streep" style={{backgroundColor: commentData.user_id === auth.id ?  "#EB4511" : "#C7E0F0"}}></div>
      <p className="postdetail-page-container__commentlist__item__userdata">
        {commentData.user
          ? commentData.user.first_name + " " + commentData.user.last_name
          : null}
      </p>
      <p className="postdetail-page-container__commentlist__item__userdata">
        {commentData.created_at}
      </p>
      <p className="postdetail-page-container__commentlist__item__body">
        {commentData.body}
      </p>
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
    </li>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth.currentUser,
});

PostDetailCommentItem.propTypes = {
  commentData: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(PostDetailCommentItem);
