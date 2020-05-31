import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  getUserDetail,
  clearUserDetail,
} from "../../../redux/actions/userActions";

import "./UserDetailPage.css";
import { DELETE_POST } from "../../../redux/actions/actionTypes";
import DeleteChangeButton from "../../layout/buttons/deleteChangeButton/DeleteChangeButton";


class UserDetailPage extends Component {
  componentDidMount() {
    this.props.getUserDetail(this.props.match.params.id,(path) => {
      this.props.history.push(path)} );
  }

  componentDidUpdate(prevProps) {
    // console.log(this.props.location.key);
    if (prevProps.location.key !== this.props.location.key) {
      this.props.getUserDetail(this.props.match.params.id);
    }
  }

  componentWillUnmount() {
    this.props.clearUserDetail();
  }

  render() {
    const { userData } = this.props;

    return (
      <div className="userdetail-page-container">
        {userData === null ? (
          <div className="userdetail-page-container__loadingbox">
            <h1>loading...</h1>
          </div>
        ) : (
          <div className="grid-container-user">
            <div className="grid-container-user__titel">
              <h1>Blogposts posted</h1>
            </div>
            <div className="grid-container-user__name">
              {/* <p>avatar: {userData.avatar}</p> */}
              <p>
                {userData.first_name} {userData.last_name}
              </p>
              <p>{userData.email}</p>
              <p>{userData.created_at}</p>
              <p>{userData.updated_at}</p>
            </div>
            <div className="grid-container-user__body">
              <ul>
                {userData.blog_posts.map((blog_post) => (
                  <li key={blog_post.id}>
                    <Link to={`/posts/${blog_post.id}`}>
                      <p>{blog_post.title}</p>
                    </Link>
                    <DeleteChangeButton
                  buttonData={blog_post}
                  clickFunctie={DELETE_POST}
                  buttonText="Delete post"
                  doorverwijsPath={`/users/${userData.id}`}
                />
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid-container-user__commenttitel">
              <h2>COMMENTS</h2>
            </div>
            <div className="grid-container-user__comment">
              <ul>
                {userData.comments.map((comment) => (
                  <li key={comment.id}>
                    <p>{comment.body}</p>
                    <Link to={`/posts/${comment.blog_post.id}`}>
                      <p>at {comment.blog_post.title}</p>
                    </Link>
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
  userData: state.user,
});

export default connect(mapStateToProps, { getUserDetail, clearUserDetail })(
  UserDetailPage
);
