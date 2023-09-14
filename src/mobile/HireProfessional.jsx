import React from "react";
import Starlinks from "../images/star link.png";
import IconWorkjeje from "../images/Logo - White.png";
import AppleBtnMobile from '../images/appleBtn-mobile.png'
import GoogleBtnMobile from '../images/googleBtn-mobile.png'
import PeruMobile from '../images/peruCave-mobile.png'
import SpaAndSalon from '../images/spaAndSalon-moblie.png'
import PlaceVisited from '../images/placeVisted-mobile.png'
import LinkMobile from '../images/link-icon.png' 

const HireProfessional = () => {
  return (
    <div className="hire-professional">
      <div className="stars-and-profe-texts">
        <img className="stars-mobile" src={Starlinks} alt="" />
        <img className="stars-mobile" src={Starlinks} alt="" />
        <img className="stars-mobile" src={Starlinks} alt="" />
        <img className="stars-mobile" src={Starlinks} alt="" />
        <img className="stars-mobile" src={Starlinks} alt="" />
      </div>
      <div className="professional-texts">
        Hire Pr
        <img className="workjeje-prof-icon" src={IconWorkjeje} alt="" />
        fessionals.
      </div>
      <div className="get-connected-to-verified">
        <p>
          Get connected to verified and trusted service providers around you
          with ease and solid proof of quality. From customer safety to ease of
          use, Work jeje has it all.
        </p>
      </div>
      <div className="profs-btn-mobile">
      <a href="https://apps.apple.com/ng/app/workjeje/id1628757239"><img className="Mobile-Btn" src={AppleBtnMobile} alt="" /></a>
        <a href="https://play.google.com/store/apps/details?id=com.stellaredge.workjeje"><img className="Mobile-Btn" src={GoogleBtnMobile} alt="" /></a>
      </div>
      <div className="mobilephones">
      <img src={PeruMobile} alt="" />
      <img src={SpaAndSalon} alt="" />
      <img src={PlaceVisited} alt="" />
      </div>
      <div className="link-yellow-text">
      <img src={LinkMobile} alt="" />
      <h2>Get connected to verified and trusted service providers around you.</h2>
      </div>
      <div className="profs-btn-mobile">
      <a href="https://apps.apple.com/ng/app/workjeje/id1628757239"><img className="Mobile-Btn" src={AppleBtnMobile} alt="" /></a>
      <a href="https://play.google.com/store/apps/details?id=com.stellaredge.workjeje"><img className="Mobile-Btn" src={GoogleBtnMobile} alt="" /></a>
    </div>
    </div>
  );
};

export default HireProfessional;
