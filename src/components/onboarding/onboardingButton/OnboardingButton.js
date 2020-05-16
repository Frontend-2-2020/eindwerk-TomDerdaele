import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./OnboardingButton.css";

const OnboardingButton = ({ children }) => {
  return (
    <Link to="/login" className="onboarding-button dinosaur">
      <div className="dinosaur onboarding-button__text">{children}</div>
    </Link>
  );
};

OnboardingButton.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OnboardingButton;
