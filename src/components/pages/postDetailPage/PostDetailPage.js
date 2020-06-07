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
import { motion } from "framer-motion";

class PostDetailPage extends Component {
  // Ophalen van de Post d.m.v het id.
  componentDidMount() {
    this.props.getPostDetail(this.props.match.params.id);
  }

  // Legen van postDetail in Redux, om proper de volgende op te kunnen halen.
  componentWillUnmount() {
    this.props.clearPostDetail();
  }

  render() {
    const { postDetail } = this.props.posts;

    // Pre defined states van de animaties, zodat ze mooi in sync lopen.
    const detailVariants = {
      initial: { opacity: 1, y: "-100vh" },
      in: { opacity: 1, y: 0 },
      out: { opacity: 1, x: "100vw" },
    };

    const detailTransitions = {
      type: "tween",
      ease: "anticipate",
      duration: 1,
    };

    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={detailVariants}
        transition={detailTransitions}
        className="postdetail-page-container"
      >
        {postDetail === null ? (
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
                <p>at: {postDetail.created_at}</p>
                {postDetail.created_at === postDetail.updated_at ? null :
                <p>updated: {postDetail.updated_at}</p>}
              </div>

              <div className="deletechangebutton-container">
                <DeleteChangeButton
                  buttonData={postDetail}
                  clickFunctie={DELETE_POST}
                  buttonText="Delete blable"
                  doorverwijsPath="/posts"
                />
                <DeleteChangeButton
                  buttonData={postDetail}
                  clickFunctie={SET_EDIT_POST}
                  buttonText="Edit blable"
                />
              </div>
            </div>
            <div className="grid-container__body">
              <div
                className="grid-container__body__text"
                dangerouslySetInnerHTML={{ __html: postDetail.body }}
              />
            </div>
            <div className="grid-container__comment">
              <div className="grid-container__comment__topbox">
                <div className="grid-container__comment__aantal">
                  {postDetail.comments.length}
                </div>

                <div className="grid-container__comment__topbox__title-add-box">
                  <h2 className="grid-container__comment__headline">
                    COMMENTS
                  </h2>

                  {/* COMMENT form */}
                  {this.props.auth.loggedIn === true ? (
                    <PostDetailCommentAdjust id={postDetail.id} />
                  ) : null}
                </div>
              </div>

              <ul className="postdetail-page-container__commentlist">
                {postDetail.comments.map((comment) => (
                  <PostDetailCommentItem
                    key={comment.id}
                    commentData={comment}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </motion.div>
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
