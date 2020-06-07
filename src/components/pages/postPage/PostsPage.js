import React, { Component, Fragment } from "react";
// import PostsSlider from "./postSlider/PostsSlider";

import { connect } from "react-redux";
import { getPosts } from "../../../redux/actions/postActions";

import "./PostsPage.css";
import "./postSlider/PostSlider.css";

import SmallRoundButton from "../../layout/buttons/smallRoundButton/SmallRoundButton";
import TextButton from "../../layout/buttons/textButton/TextButton";
import LoadingBox from "../../layout/loadingBox/LoadingBox";
import PostSlider from "./postSlider/PostSlider";
import { motion } from "framer-motion";
import Cursor from "../../layout/cursor/Cursor";

class PostsPage extends Component {
  // Ophalen van posts met post-pagina als argument
  componentDidMount() {
    this.props.getPosts(this.props.posts.currentPage);
  }

  // Paginering functies
  latestHandler = () => {
    this.props.getPosts();
  };

  nextPageHandler = () => {
    this.props.getPosts(this.props.posts.nextPage);
  };

  prevPageHandler = () => {
    this.props.getPosts(this.props.posts.prevPage);
  };

  // Automatische link om de button te gebruiken.
  pushHandler = () => {
    this.props.history.push("/posts/add");
  };

  render() {
    const { allposts, nextPage, prevPage, currentPage } = this.props.posts;

    // Pre defined states van de animaties, zodat ze mooi in sync lopen.
    const postVariants = {
      initial: { opacity: 1, y: "100vw" },
      in: { opacity: 1, y: 0 },
      out: { opacity: 0, y: "100vh" },
    };

    const buttonVariants = {
      initial: { opacity: 0 },
      in: { opacity: 1 },
      out: { opacity: 0 },
    };

    const postTransitions = {
      type: "tween",
      ease: "anticipate",
      duration: 1,
    };

    return (
      <Fragment>
        <Cursor color="#FF004F"/>
        <div className="posts-page-container">
          {this.props.auth.loggedIn === true ? (
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={buttonVariants}
            >
              <SmallRoundButton click={this.pushHandler} soort="set-addpost">
                <p className="dinosaur">New!</p>
              </SmallRoundButton>
            </motion.div>
          ) : null}

          {/* Alle posts */}
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={postVariants}
            transition={postTransitions}
          >
            {allposts.length ? (
              allposts.map((post) => <PostSlider key={post.id} post={post} />)
            ) : (
              <LoadingBox />
            )}
          </motion.div>

          {/* Scroll info onderaan */}
          <div className="posts-page-container__bottomtext">
            <p>scroll for more</p>
          </div>

          {/* Paginatie bar onderaan */}
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={buttonVariants}
            className="posts-page-container__pagineringbox"
          >
            <div className="posts-page-container__pagineringbox__item">
              {currentPage > 1 ? (
                <TextButton
                  className={"posts-page-container__pagineringbox__item__link"}
                  click={this.latestHandler}
                  buttonText="latest"
                />
              ) : null}
            </div>
            <div className="posts-page-container__pagineringbox__item">
              {prevPage ? (
                <TextButton
                  className={"posts-page-container__pagineringbox__item__link"}
                  click={this.prevPageHandler}
                  buttonText="newer"
                />
              ) : null}
            </div>
            <div className="posts-page-container__pagineringbox__item">
              {nextPage ? (
                <TextButton
                  className="posts-page-container__pagineringbox__item__link"
                  click={this.nextPageHandler}
                  buttonText="older"
                />
              ) : null}
            </div>
          </motion.div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPosts })(PostsPage);
