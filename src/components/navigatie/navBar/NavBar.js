import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./NavBar.css";
import BlabbleLogo from "../../layout/logo/BlabbleLogo";
import { connect } from "react-redux";
import { logoutActie } from "../../../redux/actions/authActions";

const NavBar = (props) => {
  const { soort, auth } = props;

  const logout = () => {
    props.logoutActie();
  };

  return (
    <Fragment>
      <nav className="nav-container">
        <Link to="/">
          <BlabbleLogo
            className="nav-container__logo"
            color={soort !== "users" ? "#26284A" : "white"}
          />
        </Link>

        {soort === "auth" ? (
          <div className="nav-container__links">
            {auth.loggedIn ? (
              <div
                className="nav-container__links__link nav-container__links__link--logout"
                onClick={logout}
              >
                Logout
              </div>
            ) : (
              <Link className="nav-container__links__link" to="/posts">
                Visit as guest
              </Link>
            )}
          </div>
        ) : (
          <div className="nav-container__links">
            {/* dit moet nog aangepast worden ifv loggedIn uit store */}
            {auth.loggedIn ? (
              <div
                className="nav-container__links__link nav-container__links__link--regular"
                onClick={logout}
              >
                Logout
              </div>
            ) : (
              <Link className="nav-container__links__link" to="/login">
                Login
              </Link>
            )}

            <Link className="nav-container__links__link" to="/posts">
              latest
            </Link>
            <div
              className="nav-container__links__link nav-container__links__link--regular"
              onClick={logout}
            >
              previous
            </div>
            <div
              className="nav-container__links__link nav-container__links__link--regular"
              onClick={logout}
            >
              next
            </div>
          </div>
        )}
      </nav>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

NavBar.propTypes = {
  soort: PropTypes.oneOf(["posts", "auth", "users"]).isRequired,
};

export default connect(mapStateToProps, { logoutActie })(NavBar);
