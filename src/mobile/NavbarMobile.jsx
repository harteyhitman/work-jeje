import React from "react";
import Workjejetext from "../images/Workjeje.png";
import WorkjejeIcon from "../images/Logo - White.png";
import HamburgerMobileNew from "./HamburgerMobileNew";


const NavbarMobile = () => {
  
  return (
    <div className="navmobile">
      <div className="workjeje-logo-and-and-text">
        <img src={WorkjejeIcon} alt="" />
        <img src={Workjejetext} alt="" />
      </div>
    <HamburgerMobileNew />
    </div>
  );
};

export default NavbarMobile;
