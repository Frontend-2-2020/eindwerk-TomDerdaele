import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./NavBar.css";
import BlabbleLogo from "../../layout/logo/BlabbleLogo";
import { connect } from "react-redux";
import { logoutActie } from "../../../redux/actions/authActions";
import { getPosts } from "../../../redux/actions/postActions";
import TextButton from "../../layout/buttons/textButton/TextButton";

const NavBar = (props) => {
  const { soort, auth, getPosts, logoutActie } = props;

  const logout = () => {
    logoutActie();
  };

  const latestResetHandler = () => {
    getPosts();
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
              <TextButton
                className="nav-container__links__link"
                click={logout}
                buttonText="logout"
              />
            ) : (
              <Link to="/posts">
                <TextButton
                  className="nav-container__links__link"
                  buttonText="visit as guest"
                />
              </Link>
            )}
          </div>
        ) : (
          <div className="nav-container__links">
            {auth.loggedIn ? (
              <TextButton
                className="nav-container__links__link"
                click={logout}
                buttonText="logout"
              />
            ) : (
              <Link to="/login">
                <TextButton
                  className="nav-container__links__link"
                  buttonText="login"
                />
              </Link>
            )}

            <Link to="/posts">
              <TextButton
                className="nav-container__links__link"
                click={latestResetHandler}
                buttonText="latest blabs"
              />
            </Link>
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

export default connect(mapStateToProps, { logoutActie, getPosts })(NavBar);
