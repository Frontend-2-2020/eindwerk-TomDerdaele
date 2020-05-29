import React, { Component } from "react";
import { connect } from "react-redux";
import { Form } from "formik";
import "./PostDetailCommentTextArea.css";
import BlabbleTextArea from "../../../layout/inputfield/BlabbleTextArea";

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
        <BlabbleTextArea
          type="text"
          name="body"
          placeHolder="Add comment..."
          className="comment-textArea"
          height="2rem" // check CSS file voor juist getal
          {...this.props}
        />
        <button
          type="submit"
          style={{ display: "block", backgroundColor: "pink", marginTop: "1rem" }}
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
