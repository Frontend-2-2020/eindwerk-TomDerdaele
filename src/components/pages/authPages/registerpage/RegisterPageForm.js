import React from "react";
import { Form } from "formik";
import BlabbleInputField from "../../../layout/inputfield/BlabbleInputField";
import OnboardingButton from "../../../layout/buttons/onboardingButton/OnboardingButton";

const RegisterPageForm = (props) => {
  return (
      <Form noValidate> 
      {/* om browser validatie uit te zetten */}
        <BlabbleInputField
          className="authfield"
          name="first_name"
          type="text"
          placeHolder="Firstname"
          borderColor="#C7E0F0"
          // om lijn onzichtbaar te maken //
          {...props}
        />
        <BlabbleInputField
          className="authfield"
          name="last_name"
          type="text"
          placeHolder="Lastname"
          borderColor="#C7E0F0"
          {...props}
        />
        <BlabbleInputField
          className="authfield"
          name="email"
          type="email"
          placeHolder="email"
          borderColor="#C7E0F0"
          {...props}
        />
        <BlabbleInputField
          className="authfield"
          name="password"
          type="password"
          placeHolder="password"
          borderColor="#C7E0F0"
          {...props}
        />
        <OnboardingButton type="submit">
          <p>Join!</p>
        </OnboardingButton>

      </Form>
  );
};

export default RegisterPageForm;
