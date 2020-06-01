import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { addPost, editPost } from "../../../redux/actions/postActions";
import { Redirect, useHistory } from "react-router-dom";
import * as Yup from "yup";
import "./ChangePostPage.css";
import "./ChangePostPageTextArea.css"
import ChangePostPageForm from "./ChangePostPageForm";


const ChangePostPage = (props) => {

  const history = useHistory()

  const onSubmitHandler = (values, actions) => {
    if (values.id) {
      props.editPost(values, props.auth.currentUser, (path) => {
        history.push(path);
      });
      actions.resetForm();
    } else {
      props.addPost(values, props.auth.currentUser, (path) => {
        history.push(path);
      });
      actions.resetForm();
    }
  };

  const addPostSchema = Yup.object().shape({
    title: Yup.string()
      .min(5, "Use at least 5 characters")
      .max(70, "Too Long!")
      .required("Required"),
    body: Yup.string()
      .min(5, "Use at least 5 characters")
      .required("Required"),
  });

  // redirect bij refresch op add page of logout op deze pagina
  if (
    !(props.posts.allposts.length || props.posts.setPostForEdit) ||
    !props.auth.loggedIn
  ) {
    return <Redirect push to="/posts" />;
  }

  return (
    <div className="changepost-container">
      <div className="changepost-container__form">
        <Formik
          initialValues={{ title: "", body: "" }}
          onSubmit={onSubmitHandler}
          validationSchema={addPostSchema}
        >
          {(props) => <ChangePostPageForm {...props} />}
        </Formik>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
  auth: state.auth,
});

export default connect(mapStateToProps, { addPost, editPost })(ChangePostPage);
