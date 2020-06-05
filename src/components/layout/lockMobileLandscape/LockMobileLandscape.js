import React from "react";
import "./LockMobileLandscape.css";

const LockMobileLandscape = () => {

  // Component dat mobile landscape disabled, omdat dit ander niet deftig lukt om de CTA buttons
  // en andere zaken goed te zetten. Anders trekt het toch op niet,
  // dus dit leek me een mooiere optie :) -- Who uses Landscape mobile anyway ;)

  return (
    <div className="mobile-landscape-block">
        <p className="mobile-landscape-block__text">Sorry, this layout is picky about landscape views on mobile devices.</p>
        <p className="mobile-landscape-block__text"> Please turn your device. thanks!</p>
    </div>
  );
};

export default LockMobileLandscape;
