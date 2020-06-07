import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { loginActie } from "../../../../redux/actions/authActions";

import * as Yup from "yup";
import "../Authpages.css";

import LoginPageForm from "./LoginPageForm";

const LoginPage = (props) => {
  const { auth, loginActie } = props;

  // Validatie van de inputvelden met Yup.
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(5, "Use at least 5 character password")
      .max(70, "Too Long!")
      .required("Required"),
  });

  const onSubmitHandler = (values, actions) => {
    loginActie(values, (path) => {
      props.history.push(path);
    }); // Fuctie uit Redux om Login token op te halen en doorverwijzen
    // Fuctie uit Formik om Form te resetten
    actions.resetForm();
  };

  // LoginPage niet meer bereikbaar na inloggen
  // push prop in redirect is nodig voor animated routes
  if (auth.loggedIn === true) {
    return <Redirect push to="/posts" />;
  }

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
        <div className="authpage-container__link">
          {auth.signupSucces ? (
            <p className="authpage-container__link__tagline">
              Just confirm your password and Blab!
            </p>
          ) : (
            <Link to="/register">
              <p className="authpage-container__link__btn">
                No account yet?{" "}
                <span className="authpage-container__link__btn--uderline">
                  Please join here first...
                </span>
              </p>
            </Link>
          )}
        </div>
      </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginActie })(LoginPage);
