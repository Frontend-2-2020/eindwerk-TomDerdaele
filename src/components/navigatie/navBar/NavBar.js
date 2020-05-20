import React, { Fragment } from "react";
// import PropTypes from "prop-types";
import "./NavBar.css";
import BlabbleLogo from "../../layout/logo/BlabbleLogo";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <Fragment>
      <nav className="nav-container">
        <Link to="/">
          <BlabbleLogo className="nav-container__logo" color="#26284A" />
        </Link>

        <div className="nav-container__links">
          <Link className="nav-container__links__link" to="/login">
            login
          </Link>
          <Link className="nav-container__links__link" to="/posts">
            latest
          </Link>
        </div>
      </nav>
    </Fragment>
  );
};

NavBar.propTypes = {
  // color: PropTypes.string.isRequired,
};

export default NavBar;
