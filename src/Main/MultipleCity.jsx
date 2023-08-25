import React from "react";
import City from "../images/multiple city.png";
import PeruCaveNext from "../images/peru slant.png";
import PlaceVisited from "../images/places visited slant.png";
import Gettheapp from "../images/Get the APP now.png";
import Logo from "../images/Logo - White.png";
import Enugu from "../images/Enugu.png";
import Abuja from "../images/Abuja.png";
import Lagos from "../images/Lagos.png";
import Appstore from "../images/apple logo.png";
import Applestore from "../images/AppStore (1).png";
import Download1 from "../images/Download on (1).png";
import PlaystoreIcon from "../images/playstore icon.png";
import GetItOn from "../images/Get it on.png";
import PlaystoreText from "../images/PlayStore text.png";

const MultipleCity = () => {
  return (
    <div className="multiple-city">
      <h1 className="multiple-city-text">Available in multiple cities.</h1>
      <img className="multiple-colors" src={City} alt="" />
      <div className="cities">
        <img src={Enugu} alt="" />
        <img src={Abuja} alt="" />
        <img src={Lagos} alt="" />
      </div>

      <div>
        <div className="City-img">
          <img className="city-img-unit img-unit0" src={PeruCaveNext} alt="" />
          <img className="city-img-unit img-unit1" src={PlaceVisited} alt="" />
        </div>
        <img className="get-the-app" src={Gettheapp} alt="" />
        <p className="keep-your-opportunity-closer">
          Keep your opportunities closer!
        </p>
        <div className="navbar-hambur">
          <div className="logo-and-work-jeje">
            <img className="logo" src={Logo} alt="" />
            <p className="workje-je">Workjeje</p>
          </div>
          <div className="download-apple">
            <img className="Apple-store-logo" src={Appstore} alt="" />
            <img className="download-apple-text" src={Download1} alt="" />
            <img className="apple-store-text" src={Applestore} alt="" />
          </div>
          <div className="download-playstore-container">
            <img className="play-store-logo" src={PlaystoreIcon} alt="" />
            <img className="download-playstore" src={GetItOn} alt="" />
            <img className="play-store-text" src={PlaystoreText} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleCity;
