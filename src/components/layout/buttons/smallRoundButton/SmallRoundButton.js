import React from "react";
import PropTypes from 'prop-types';

import "./SmallRoundButton.css"

const SmallRoundButton = ({children, click, soort}) => {
  return (
    <button
      className={`small-round-button small-round-button--${soort}`}
      onClick={click}
    >
      {children}
    </button>
  );
};

SmallRoundButton.propTypes = {
  children: PropTypes.element.isRequired,
  click: PropTypes.func.isRequired,
  soort: PropTypes.oneOf(["logout", "addpost"]).isRequired,
};

export default SmallRoundButton;
