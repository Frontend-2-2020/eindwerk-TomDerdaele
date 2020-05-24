import React from "react";
import { connect } from "react-redux";

const ErrorPage = (props) => {
  const { errorAuth } = props;

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "white",
        height: "100vh",
        width: "100vw",
        top: 0,
        left: 0,
        zIndex: 100,
      }}
    >
      <h1>{errorAuth ? errorAuth : "PAGE NOT FOUND 404"}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errorAuth: state.auth.errorAuth,
});

export default connect(mapStateToProps)(ErrorPage);
