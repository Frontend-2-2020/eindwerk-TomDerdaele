import React from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import RegisterPageForm from './RegisterPageForm';
// import PropTypes from 'prop-types';

const RegisterPage = props => {
  const registerSchema = Yup.object().shape({
    first_name: Yup.string()
    .min(2, "Use at least 2 characters")
    .max(70, "Too Long!")
    .required("Required"),
    last_name: Yup.string()
    .min(2, "Use at least 2 characters")
    .max(70, "Too Long!")
    .required("Required"),
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
    <div className="authpage-container authpage-container--register">
      <div className="authpage-container__form">
        <Formik
          initialValues={{ first_name:"", last_name:"", email: "", password: "" }}
          onSubmit={onSubmitHandler}
          validationSchema={registerSchema}
        >
          {(props) => <RegisterPageForm {...props} />}
        </Formik>
      </div>
    </div>
  );
};

// RegisterPage.propTypes = {
  
// };

export default RegisterPage;