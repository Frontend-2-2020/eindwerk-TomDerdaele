import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./NavBar.css";
import BlabbleLogo from "../../layout/logo/BlabbleLogo";

const NavBar = ({ soort, kleur }) => {
  return (
    <Fragment>
      <nav className="nav-container">
        <Link to="/">
          <BlabbleLogo className="nav-container__logo" color={kleur} />
        </Link>

        {soort === "auth" ? (
          <div className="nav-container__links">
            <Link className="nav-container__links__link" to="/posts">
              Visit as guest
            </Link>
          </div>
        ) : (
          <div className="nav-container__links">
            <Link className="nav-container__links__link" to="/login">
              login
            </Link>
            <Link className="nav-container__links__link" to="/posts">
              latest
            </Link>
          </div>
        )}
      </nav>
    </Fragment>
  );
};

NavBar.propTypes = {
  soort: PropTypes.oneOf(["general", "auth"]).isRequired,
  kleur: PropTypes.string.isRequired,
};

export default NavBar;
