import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
// import PropTypes from "prop-types";
import LoginPageForm from "./LoginPageForm";
import "../Authpages.css";

const LoginPage = (props) => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(5, "Use at least 5 character password")
      .max(70, "Too Long!")
      .required("Required"),
  });

  const onSubmitHandler = (values, actions) => {
    actions.resetForm(); // Fuctie uit Formik om Form te resetten
    console.log("submit");
  };

  return (
    <div className="loginpage-container">
      <div className="loginpage-container__form">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={onSubmitHandler}
          validationSchema={LoginSchema}
          // validateOnChange={false}
        >
          {(props) => <LoginPageForm {...props} />}
        </Formik>
      </div>
    </div>
  );
};

// LoginPage.propTypes = {};

export default LoginPage;
