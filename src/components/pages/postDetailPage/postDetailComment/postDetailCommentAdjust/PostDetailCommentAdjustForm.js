import React, { Component } from "react";
import { connect } from "react-redux";
import { Form } from "formik";
import "./PostDetailCommentTextArea.css";
import BlabbleTextArea from "../../../../layout/inputfield/BlabbleTextArea";
import SmallRoundButton from "../../../../layout/buttons/smallRoundButton/SmallRoundButton";

class PostDetailCommentAdjustForm extends Component {
  componentDidUpdate(prevProps) {
    if (
      prevProps.posts.setCommentForEdit !==
        this.props.posts.setCommentForEdit &&
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

        {this.props.isSubmitting ? null : (
          <SmallRoundButton soort="addcomment" type="submit">
            <p className="dinosaur"> {this.props.posts.setCommentForEdit ? "Edit" : "Add"}</p>
          </SmallRoundButton>
        )}

        {/* <button
          type="submit"
          style={{ display: "block", backgroundColor: "pink", marginTop: "1rem" }}
          disabled={this.props.isSubmitting}
        >
        </button> */}
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(PostDetailCommentAdjustForm);
