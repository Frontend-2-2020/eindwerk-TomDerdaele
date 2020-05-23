import React from "react";
import { Form } from "formik";
import BlabbleInputField from "../../../layout/inputfield/BlabbleInputField";

const LoginPageForm = (props) => {
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
          {...props}
        />
        <BlabbleInputField
          className="authfield"
          name="password"
          type="password"
          placeHolder="password"
          borderColor="white"
          {...props}
        />
        <button type="submit">Blab!</button>
      </Form>
  );
};

export default LoginPageForm;
