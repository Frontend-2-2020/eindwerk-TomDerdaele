import React from "react";
import { Form } from "formik";
import BlabbleInputField from "../../../layout/inputfield/BlabbleInputField";

const LoginPageForm = (props) => {
  return (
      <Form noValidate> {/* om browser validatie uit te zetten */}
        <BlabbleInputField
          className="blabble-input"
          name="email"
          type="email"
          placeHolder="email"
          {...props}
        />
        <BlabbleInputField
          className="blabble-input"
          name="password"
          type="password"
          placeHolder="password"
          {...props}
        />
        <button type="submit">Submit</button>
      </Form>
  );
};

export default LoginPageForm;
