import React, { Fragment } from "react";
import { logoutActie } from "../../../redux/actions/authActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./CurrentUserNav.css";
import SmallRoundButton from "../../layout/buttons/smallRoundButton/SmallRoundButton";
import Kruisje from "../../layout/logo/Kruisje";
import { motion } from "framer-motion";

const CurrentUserNav = ({ auth: { currentUser, loggedIn }, logoutActie }) => {

  // Actie naar Redux om uit te loggen.
  const logout = () => {
    logoutActie();
  };

  const ctaVariants = {
    up: { scale: 1.2, transition: { staggerChildren: 0.5 } },
    down: { scale: 0.8 },
  };

  return (
    <Fragment>
      {loggedIn ? (
        <div className="currentuser-nav-container">
          <Link to={`/users/${currentUser.id}`}>
          <motion.div
              whileHover="up"
              variants={ctaVariants}
              className="currentuser-nav-container__avatar"
              style={{ backgroundImage: `url(${currentUser.avatar})` }}
            ></motion.div>
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
