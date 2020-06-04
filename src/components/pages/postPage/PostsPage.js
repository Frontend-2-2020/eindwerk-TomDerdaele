import React, { Component } from "react";
// import PostsSlider from "./postSlider/PostsSlider";

import { connect } from "react-redux";
import { getPosts } from "../../../redux/actions/postActions";

import "./PostsPage.css";
import "./postSlider/PostSlider.css"


import SmallRoundButton from "../../layout/buttons/smallRoundButton/SmallRoundButton";
import TextButton from "../../layout/buttons/textButton/TextButton";
import LoadingBox from "../../layout/loadingBox/LoadingBox";
import PostSlider from "./postSlider/PostSlider";

class PostsPage extends Component {
  componentDidMount() {
    this.props.getPosts(this.props.posts.currentPage);
  }

  latestHandler = () => {
    this.props.getPosts();
  };

  nextPageHandler = () => {
    this.props.getPosts(this.props.posts.nextPage);
  };

  prevPageHandler = () => {
    this.props.getPosts(this.props.posts.prevPage);
  };

  pushHandler = () => {
    this.props.history.push("/posts/add");
  };

  render() {
    const { allposts, nextPage, prevPage, currentPage } = this.props.posts;


    return (
      <div className="posts-page-container">
        {allposts.length ? (
          allposts.map((post) => <PostSlider key={post.id} post={post} />)
          ) : (
          <LoadingBox/>
        )}

        {/* Scroll info onderaan */}
        <div className="posts-page-container__bottomtext">
            <p>scroll for more</p>
        </div>

        {/* Paginatie bar onderaan */}
        <div className="posts-page-container__pagineringbox">
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
        </div>

        {this.props.auth.loggedIn === true ? (
          <SmallRoundButton click={this.pushHandler} soort="set-addpost">
            <p className="dinosaur">blab!</p>
          </SmallRoundButton>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPosts })(PostsPage);