import React, { Component } from "react";
import { connect } from "react-redux";
import { Form } from "formik";
import BlabbleInputField from "../../../layout/inputfield/BlabbleInputField";

class LoginPageForm extends Component {

  componentDidMount() {
    // Als je specifiek van registerpage naar hier komt vult hij automatisch het email adress in. Nice ee! :) 
    // specifiek wel email adress aangesproken, geeft error op uncontrolled element bij passwoord
    if (this.props.auth.signupSucces) {
      this.props.setFieldValue('email', this.props.auth.signupSucces.email)
    }
  }
  

  render() {
    return (
      <Form noValidate>
        {/* om browser validatie uit te zetten */}
        <BlabbleInputField
          className="authfield"
          name="email"
          type="email"
          placeHolder="email"
          borderColor="white"
          // om lijn onzichtbaar te maken //
          {...this.props}
        />
        <BlabbleInputField
          className="authfield"
          name="password"
          type="password"
          placeHolder="password"
          borderColor="white"
          {...this.props}
        />
        <button type="submit">Blab!</button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(LoginPageForm);
