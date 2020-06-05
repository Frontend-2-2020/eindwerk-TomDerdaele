import React from "react";
import PropTypes from "prop-types";

const TextButton = ({ className, click, buttonText }) => {
  
  // Herbruikbare button, met enkel tekst

  return (
    <div className={className} onClick={click}>
      <p>{buttonText}</p>
    </div>
  );
};

TextButton.propTypes = {
  click: PropTypes.func,
  className: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default TextButton;
