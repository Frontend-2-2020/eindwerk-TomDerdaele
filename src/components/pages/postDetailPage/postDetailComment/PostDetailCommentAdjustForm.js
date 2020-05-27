import React, { Component } from "react";
import { connect } from "react-redux";
import { Form } from "formik";
import "./PostDetailInputField.css";
import BlabbleInputField from "../../../layout/inputfield/BlabbleInputField";

class PostDetailCommentAdjustForm extends Component {
  componentDidUpdate(prevProps) {
    if (
      prevProps.posts.setCommentForEdit !== this.props.posts.setCommentForEdit &&
      this.props.posts.setCommentForEdit
    ) {
      this.props.setValues(this.props.posts.setCommentForEdit);
    }
  }

  render() {
    return (
      <Form noValidate>
        <BlabbleInputField
          className="comment-input"
          name="body"
          type="text"
          placeHolder="Add comment..."
          borderColor="white"
          {...this.props}
        />
        <button
          type="submit"
          style={{ display: "block", backgroundColor: "pink" }}
          disabled={this.props.isSubmitting}
        >
          {this.props.posts.setCommentForEdit ? "Save changes" : "Add Comment"}
        </button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(PostDetailCommentAdjustForm);
