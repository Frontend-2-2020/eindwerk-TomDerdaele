import React, { Component } from "react";
import PostsSlider from "./postSlider/PostsSlider";

import { connect } from "react-redux";
import { getPosts } from "../../../redux/actions/postActions";

import "./PostsPage.css";

class PostsPage extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { allposts } = this.props;

    return (
      <div className="posts-page-container">
        <PostsSlider allposts={allposts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allposts: state.posts.allposts,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPosts })(PostsPage);
