import React, { Component } from "react";

import { connect } from "react-redux";
import {
  getPostDetail,
  clearPostDetail,
} from "../../../redux/actions/postActions";

import "./PostDetailPage.css";

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
              <p>
                {postDetail.user.first_name} {postDetail.user.last_name}
              </p>
              <p>{postDetail.user.created_at}</p>
            </div>
            <div className="grid-container__body">
              <p>{postDetail.body}</p>
            </div>
            <div className="grid-container__commenttitel">
              <h2>COMMENTS</h2>
            </div>
            <div className="grid-container__comment">
              <input type="text" />
              <ul>
                {postDetailComments.map((comment) => (
                  <li key={comment.id}>
                    <p>
                      {comment.user
                        ? comment.user.first_name + " " + comment.user.last_name
                        : ""}
                    </p>
                    <h3>{comment.created_at}</h3>
                    <p>{comment.body}</p>
                    {/* <PrivateButtonComment what={comment} buttonText="Delete comment"/>
                      <PrivateButtonEditComment what={comment} buttonText="Edit comment"/> */}
                  </li>
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
