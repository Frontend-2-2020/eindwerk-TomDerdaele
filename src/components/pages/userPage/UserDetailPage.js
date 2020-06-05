import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  getUserDetail,
  clearUserDetail,
} from "../../../redux/actions/userActions";

import "./UserDetailPage.css";
// import { DELETE_POST } from "../../../redux/actions/actionTypes";
// import DeleteChangeButton from "../../layout/buttons/deleteChangeButton/DeleteChangeButton";
import LoadingBox from "../../layout/loadingBox/LoadingBox";
import UserPageCommentItem from "./userPageComment/UserPageCommentItem";

class UserDetailPage extends Component {
  componentDidMount() {
    this.props.getUserDetail(this.props.match.params.id, (path) => {
      this.props.history.push(path);
    });
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
          <LoadingBox />
        ) : (
          <div className="grid-container-user">
            <div className="grid-container-user__titel">
              <div className="grid-container-user__length-aantal">
                {userData.blog_posts.length}
              </div>
              <h2 className="grid-container-user__item__headline">
                BLABLES MADE
              </h2>
            </div>
            <div className="grid-container-user__blabber">
              <p className="grid-container-user__item__headline">
                {userData.first_name} {userData.last_name}
              </p>
            </div>
            <div className="grid-container-user__name">
              <div className="grid-container-user__name__text">
                <a
                  href={`mailto:${userData.email}`}
                  className="grid-container-user__name__text--mail"
                >
                  <p>{userData.email}</p>
                </a>
                <p>{userData.created_at}</p>
                <p>{userData.updated_at}</p>
                <div
                  className="grid-container-user__name__avatar"
                  style={{ backgroundImage: `url(${userData.avatar})` }}
                ></div>
              </div>
            </div>

            <div className="grid-container-user__body">
              <ul>
                {userData.blog_posts.map((blog_post) => (
                  <li key={blog_post.id}>
                    <Link to={`/posts/${blog_post.id}`}>
                      <p className="grid-container-user__body__text">
                        {blog_post.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid-container-user__comment">
              <div className="grid-container-user__comment__topbox">
                <div className="grid-container-user__length-aantal">
                  {userData.comments.length}
                </div>

                <h2 className="grid-container-user__item__headline">
                  COMMENTS
                </h2>
              </div>

              <ul>
                {userData.comments.map((comment) => (
                  <UserPageCommentItem commentData={comment} key={comment.id} />
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
