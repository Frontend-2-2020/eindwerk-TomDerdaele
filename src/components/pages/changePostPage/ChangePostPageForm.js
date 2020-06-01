import React, { Component } from "react";
import { Form } from "formik";
import { connect } from "react-redux";
import { clearSetEdit } from "../../../redux/actions/postActions";
import BlabbleTextArea from "../../layout/inputfield/BlabbleTextArea";

class ChangePostPageForm extends Component {
  componentDidMount() {
    if (this.props.posts.setPostForEdit) {
      this.props.setValues(this.props.posts.setPostForEdit);
    }
  }

  componentWillUnmount() {
    if (this.props.posts.setPostForEdit) {
      this.props.clearSetEdit();
    }
  }

  render() {
    return (
      <Form noValidate>
        {/* <div className="changepost-container__form"> */}
          <BlabbleTextArea
            type="text"
            name="title"
            placeHolder="name your blab!"
            className="post-textarea"
            height="60px" // check CSS file voor juist getal
            {...this.props}
          />
          <BlabbleTextArea
            type="text"
            name="body"
            placeHolder="write your blab!"
            className="post-textarea--body"
            height="2rem" // check CSS file voor juist getal
            {...this.props}
          />
        {/* </div> */}
        <button
          className="dinosaur changepost-container__form__button"
          type="submit"
          style={{ display: "block" }}
          disabled={this.props.isSubmitting}
        >
          {this.props.posts.setPostForEdit ? "edit blab!" : "add blab!"}
        </button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
  auth: state.auth,
});

export default connect(mapStateToProps, { clearSetEdit })(ChangePostPageForm);
