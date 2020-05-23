import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
// import PropTypes from "prop-types";
import LoginPageForm from "./LoginPageForm";
import "../Authpages.css";
import "../AuthInputField.css";


const LoginPage = (props) => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(5, "Use at least 5 character password")
      .max(70, "Too Long!")
      .required("Required"),
  });

  const onSubmitHandler = (values, actions) => {
    actions.resetForm(); // Fuctie uit Formik om Form te resetten
    console.log("blab!");
  };

  return (
    <div className="authpage-container">
      <div className="authpage-container__form">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={onSubmitHandler}
          validationSchema={loginSchema}
        >
          {(props) => <LoginPageForm {...props} />}
        </Formik>
      </div>
    </div>
  );
};

// LoginPage.propTypes = {};

export default LoginPage;
