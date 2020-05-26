import React, { Component } from "react";
import PostsSlider from "./postSlider/PostsSlider";

import { connect } from "react-redux";
import { getPosts } from "../../../redux/actions/postActions";

import "./PostsPage.css";
import SmallRoundButton from "../../layout/buttons/smallRoundButton/SmallRoundButton";

class PostsPage extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  pushHandler = () => {
    this.props.history.push("/posts/add");
  };

  render() {
    const { allposts } = this.props;

    return (
      <div className="posts-page-container">
        <PostsSlider allposts={allposts} />
        <div className="posts-page-container__bottomtext">
          <p>scroll for more</p>
        </div>
        {this.props.auth.loggedIn === true ? (
          <SmallRoundButton click={this.pushHandler} soort="addpost">
            <p>add</p>
          </SmallRoundButton>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allposts: state.posts.allposts,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPosts })(PostsPage);
