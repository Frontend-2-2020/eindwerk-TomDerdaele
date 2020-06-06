import React from "react";
import PropTypes from "prop-types";
import "./OnboardingButton.css";
import { motion } from "framer-motion";

const OnboardingButton = ({ children, type, onClick }) => {

  // Herbruikbare button voor de Landingpagina CTA en Auth pages.

  const ctaVariants = {
    up: { scale: 1.2, transition: {staggerChildren: 0.5} },
    down: { scale: 0.8 }
  }
  
  return (
    <motion.button
      whileHover="up"
      whileTap="down"
      variants = {ctaVariants}
      type={type ? type : "button"}
      onClick={onClick}
      className="onboarding-button dinosaur"
    >
      <div className="dinosaur onboarding-button__text">{children}</div>
    </motion.button>
  );
};

OnboardingButton.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
};

export default OnboardingButton;
