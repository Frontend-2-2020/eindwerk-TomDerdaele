import React from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import RegisterPageForm from './RegisterPageForm';
import { connect } from 'react-redux';
import { registerActie } from '../../../../redux/actions/authActions';


const RegisterPage = props => {

  // Validatie van de inputvelden met Yup.
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
    props.registerActie(values, (path)=>{
      props.history.push(path)
    }) // Fuctie in redux om door te verwijzen naar de login pagina
    actions.resetForm(); // Fuctie uit Formik om Form te resetten
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

export default connect(null, {registerActie})(RegisterPage);