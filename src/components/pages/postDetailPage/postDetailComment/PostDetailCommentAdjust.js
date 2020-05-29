import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import PostDetailCommentAdjustForm from "./PostDetailCommentAdjustForm";
import { connect } from "react-redux";
import { addComment, editComment } from "../../../../redux/actions/postActions";

const PostDetailCommentAdjust = (props) => {

  const onSubmitHandler = (values, actions) => {
    if (values.id) {
      props.editComment(values, props.auth.currentUser);
      actions.resetForm();
    } else {
      props.addComment(props.id, values, props.auth.currentUser);
      actions.resetForm();
    }
  };

  const commentSchema = Yup.object().shape({
    body: Yup.string()
      .min(2, 'Too Short!')
      .required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={{ body: "" }}
        onSubmit={onSubmitHandler}
        validationSchema={commentSchema}
      >
        {(props) => <PostDetailCommentAdjustForm {...props} />}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {addComment, editComment})(PostDetailCommentAdjust);
