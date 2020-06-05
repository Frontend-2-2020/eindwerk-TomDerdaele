import React from "react";
import "./LoadingBox.css"

const LoadingBox = () => {

  // Simpel maar herbruikbaar Loading component terwijl data wordt opgehaald

  return (
    <div className="loadingbox-container">
      <div className="loadingbox-container__text">loading...</div>
    </div>
  );
};

export default LoadingBox;
