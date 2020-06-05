import React, { Component } from "react";

import { connect } from "react-redux";
import {
  getPostDetail,
  clearPostDetail,
} from "../../../redux/actions/postActions";

import "./PostDetailPage.css";
import { Link } from "react-router-dom";
import PostDetailCommentAdjust from "./postDetailComment/postDetailCommentAdjust/PostDetailCommentAdjust";
import PostDetailCommentItem from "./postDetailComment/postDetailCommentItem/PostDetailCommentItem";
import DeleteChangeButton from "../../layout/buttons/deleteChangeButton/DeleteChangeButton";
import { DELETE_POST, SET_EDIT_POST } from "../../../redux/actions/actionTypes";
import LoadingBox from "../../layout/loadingBox/LoadingBox";

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
          // <div className="postdetail-page-container__loadingbox">
          //   <h1>loading...</h1>
          // </div>
          <LoadingBox />
        ) : (
          <div className="grid-container">
            <div className="grid-container__titel">
              <h1 className="grid-container__titel__headline">
                {postDetail.title}
              </h1>
            </div>
            <div className="grid-container__user">
              <div className="grid-container__user__text">
                <Link to={`/users/${postDetail.user_id}`}>
                  <p>
                    by:{" "}
                    <span className="grid-container__user__text__name">
                      {postDetail.user.first_name} {postDetail.user.last_name}
                    </span>
                  </p>
                </Link>
                <p>{postDetail.user.created_at}</p>
              </div>

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
              {/* <p className="grid-container__body__text">{postDetail.body}</p> */}
              <div className="grid-container__body__text" dangerouslySetInnerHTML={{__html: postDetail.body}}/>

            </div>
            <div className="grid-container__comment">
              <div className="grid-container__comment__topbox">
                <div className="grid-container__comment__aantal">
                  {postDetailComments.length}
                </div>

                <div className="grid-container__comment__topbox__title-add-box">
                  <h2 className="grid-container__comment__headline">
                    COMMENTS
                  </h2>

                  {/* Comment form */}
                  {this.props.auth.loggedIn === true ? (
                    <PostDetailCommentAdjust id={postDetail.id} />
                  ) : null}
                </div>
              </div>

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
