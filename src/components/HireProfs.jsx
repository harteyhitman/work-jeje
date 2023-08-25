import React from "react";
import HireProfImg from "../images/Hire Professionals..png";
import Btn from "./Btn";
import PeruCave from "../images/Peru first.png";
import SpaSalon from "../images/spas and salons.png";
import PlacesVisited from "../images/iPhone14 Pro right.png";
import LinkIcon from "../images/link 1.png";
import Logo from "../images/Logo - White.png";
import Btn1 from "./Btn1";
import Linktext from "../images/Get connected to verified and trusted service providers around you..png";

const HireProfs = () => {
  const appleStoreClick = () => {
    console.log("first");
  };
  return (
    <div className="hire-profs">
      <img className="hire-profs-img" src={HireProfImg} alt="" />
      <img className="hire-profs-inside-text" src={Logo} alt="" />
      <p>
        Get connected to verified and trusted service providers around you with
        ease and solid proof of quality. From customer safety to ease of use,
        Work jeje has it all.
      </p>
      <div className="button">
        <Btn1
          onClick={appleStoreClick}
          className="applestore"
          label="Get it on Google Play "
        />
        <Btn
          onClick={appleStoreClick}
          className="applestore"
          label="download on the Apple Store"
        />
      </div>
      <div className="three-images">
        <img id="three-images-right" src={PeruCave} alt="" />
        <img id="three-images-middle" src={SpaSalon} alt="" />
        <img id="three-images-left" src={PlacesVisited} alt="" />
      </div>
      <div className="get-connected">
        <div className="links-container">
          <img className="link-icon" src={LinkIcon} alt="" />
          <img className="link-text" src={Linktext} alt="" />
        </div>
        <div className="button link-text-btn">
          <Btn1 onClick={appleStoreClick} className="applestore" />
          <Btn onClick={appleStoreClick} className="applestore" />
        </div>
      </div>
    </div>
  );
};
export default HireProfs;
