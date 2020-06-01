import React from "react";
import PropTypes from "prop-types";
import "./OnboardingButton.css";

const OnboardingButton = ({ children, type, onClick }) => {
  return (
    <button
      type={type ? type : "button"}
      onClick={onClick}
      className="onboarding-button dinosaur"
    >
      <div className="dinosaur onboarding-button__text">{children}</div>
    </button>
  );
};

OnboardingButton.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
};

export default OnboardingButton;
