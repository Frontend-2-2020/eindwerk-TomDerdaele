import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { addPost, editPost } from "../../../redux/actions/postActions";
import { Redirect, useHistory } from "react-router-dom";
import * as Yup from "yup";
import "./ChangePostPage.css";
import "./ChangePostPageTextArea.css";
import ChangePostPageForm from "./ChangePostPageForm";
import { motion } from "framer-motion";

const ChangePostPage = (props) => {
  const history = useHistory();

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

  // Validate met Yup.
  const addPostSchema = Yup.object().shape({
    title: Yup.string()
      .min(5, "Use at least 5 characters")
      .max(70, "Too Long!")
      .required("Required"),
    body: Yup.string().min(5, "Use at least 5 characters").required("Required"),
  });

  // redirect bij refresch op add page of logout op deze pagina.
  if (
    !(props.posts.allposts.length || props.posts.setPostForEdit) ||
    !props.auth.loggedIn
  ) {
    return <Redirect push to="/posts" />;
  }

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
        className="changepost-container"
      >
        <div className="changepost-container__form">
          <Formik
            initialValues={{ title: "", body: "" }}
            onSubmit={onSubmitHandler}
            validationSchema={addPostSchema}
          >
            {(props) => <ChangePostPageForm {...props} />}
          </Formik>
        </div>
      </motion.div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
  auth: state.auth,
});

export default connect(mapStateToProps, { addPost, editPost })(ChangePostPage);
