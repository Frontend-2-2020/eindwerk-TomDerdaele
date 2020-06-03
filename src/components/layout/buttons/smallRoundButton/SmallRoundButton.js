import React from "react";
import PropTypes from 'prop-types';

import "./SmallRoundButton.css"

const SmallRoundButton = ({children, click, soort, type}) => {
  return (
    <button
      type={type ? type : "button"}
      className={`small-round-button small-round-button--${soort}`}
      onClick={click}
    >
      {children}
    </button>
  );
};

SmallRoundButton.propTypes = {
  children: PropTypes.element.isRequired,
  click: PropTypes.func,
  soort: PropTypes.oneOf(["logout", "addpost", "set-addpost", "addcomment"]).isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default SmallRoundButton;
