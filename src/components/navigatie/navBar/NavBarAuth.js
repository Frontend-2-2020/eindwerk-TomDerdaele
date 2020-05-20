import React, { Fragment } from "react";
// import PropTypes from "prop-types";
import "./NavBar.css";
import BlabbleLogo from "../../layout/logo/BlabbleLogo";
import { Link } from "react-router-dom";

const NavBarAuth = (props) => {
  return (
    <Fragment>
      <nav className="nav-container">
        <Link to="/">
          <BlabbleLogo className="nav-container__logo" color="#26284A" />
        </Link>

        <div className="nav-container__links">
          <Link className="nav-container__links__link" to="/posts">
            Visit as guest
          </Link>
        </div>
      </nav>
    </Fragment>
  );
};

NavBarAuth.propTypes = {
  // color: PropTypes.string.isRequired,
};

export default NavBarAuth;
