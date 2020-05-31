import React, { Component } from "react";

import { connect } from "react-redux";
import {
  getPostDetail,
  clearPostDetail,
} from "../../../redux/actions/postActions";

import "./PostDetailPage.css";
import { Link } from "react-router-dom";
import PostDetailCommentAdjust from "./postDetailComment/PostDetailCommentAdjust";
import PostDetailCommentItem from "./postDetailComment/PostDetailCommentItem";
import DeleteChangeButton from "../../layout/buttons/deleteChangeButton/DeleteChangeButton";
import { DELETE_POST, SET_EDIT_POST } from "../../../redux/actions/actionTypes";

class PostDetailPage extends Component {
  componentDidMount() {
    this.props.getPostDetail(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearPostDetail();
  }

  render() {
    const { postDetail, postDetailComments } = this.props.posts;

    return (
      <div className="postdetail-page-container">
        {postDetail === null ? (
          <div className="postdetail-page-container__loadingbox">
            <h1>loading...</h1>
          </div>
        ) : (
          <div className="grid-container">
            <div className="grid-container__titel">
              <h1>{postDetail.title}</h1>
            </div>
            <div className="grid-container__name">
              <Link to={`/users/${postDetail.user_id}`}>
                <p>
                  {postDetail.user.first_name} {postDetail.user.last_name}
                </p>
              </Link>
              <p>{postDetail.user.created_at}</p>

              <div className="deletechangebutton-container">
                <DeleteChangeButton
                  buttonData={postDetail}
                  clickFunctie={DELETE_POST}
                  buttonText="Delete post"
                  doorverwijsPath="/posts"

                />
                <DeleteChangeButton
                  buttonData={postDetail}
                  clickFunctie={SET_EDIT_POST}
                  buttonText="Edit post"
                />
              </div>
            </div>
            <div className="grid-container__body">
              <p>{postDetail.body}</p>
            </div>
            <div className="grid-container__commenttitel">
              <h2>COMMENTS</h2>
            </div>
            <div className="grid-container__comment">
              {/* Comment form */}
              {this.props.auth.loggedIn === true ? (
                <PostDetailCommentAdjust id={postDetail.id} />
              ) : (
                ""
              )}
              {/* <input type="text" /> */}

              <ul className="postdetail-page-container__commentlist">
                {postDetailComments.map((comment) => (
                  <PostDetailCommentItem
                    key={comment.id}
                    commentData={comment}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPostDetail, clearPostDetail })(
  PostDetailPage
);
