import React from "react";
import PropTypes from "prop-types";

const Kruisje = ({ color, className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 238.3 238.3">
        <title>Kruisje</title>
        <polygon
          fill={color}
          points="238.3,100.1 138.2,100.1 138.2,0 100.1,0 100.1,100.1 0,100.1 0,138.2 100.1,138.2 100.1,238.3 
	138.2,238.3 138.2,138.2 238.3,138.2 "
        />
      </svg>
    </div>
  );
};

Kruisje.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Kruisje;
