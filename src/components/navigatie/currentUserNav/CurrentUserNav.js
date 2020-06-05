import React, { Fragment } from "react";
import { logoutActie } from "../../../redux/actions/authActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./CurrentUserNav.css";
import SmallRoundButton from "../../layout/buttons/smallRoundButton/SmallRoundButton";
import Kruisje from "../../layout/logo/Kruisje";

const CurrentUserNav = ({ auth: { currentUser, loggedIn }, logoutActie }) => {

  // Actie naar Redux om uit te loggen.
  const logout = () => {
    logoutActie();
  };

  return (
    <Fragment>
      {loggedIn ? (
        <div className="currentuser-nav-container">
          <Link to={`/users/${currentUser.id}`}>
            <div
              className="currentuser-nav-container__avatar"
              style={{ backgroundImage: `url(${currentUser.avatar})` }}
            ></div>
          </Link>
          <SmallRoundButton click={logout} soort="logout">
            <Kruisje
              className="currentuser-nav-container__kruisje"
              color="white"
            />
          </SmallRoundButton>
        </div>
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutActie })(CurrentUserNav);
