import React from "react";
import AppleBtnMobile from "../images/appleBtn-mobile.png";
import GoogleBtnMobile from "../images/googleBtn-mobile.png";
import LogoiconWJ from "../images/logo-icon-workjeje.png";
import FooterMobile from "./FooterMobile";
import SocialMediaMobile from "../images/social-media-mobile.png";

const ReadyToStartHiringThroughUs = () => {
  return (
    <div className="ready-to-start-hiring">
      <h1>Ready to start hiring through us?</h1>
      <div className="profs-btn-mobile">
        <img
          className="Mobile-Btn ready-to-start"
          src={AppleBtnMobile}
          alt=""
        />
        <img
          className="Mobile-Btn ready-to-start"
          src={GoogleBtnMobile}
          alt=""
        />
      </div>
      <div className="work-jeje-footer-mobile">
        <img className="workjeje-img-mobile" src={LogoiconWJ} alt="" />
        {FooterMobile.map((foot) => (
          <div key={foot.id} className="work-jeje-container-mobile">
            <div className="workjeje-footer-mobile">
              <h3>{foot.heading1}</h3>
              <p>{foot.para1}</p>
              <p>{foot.para2}</p>
              <p>{foot.para3}</p>
            </div>
            <div className="service-provider-mobile">
              <h3>{foot.heading2}</h3>
              <p>{foot.parag1}</p>
              <p>{foot.parag2}</p>
              <p>{foot.parag3}</p>
              <p>{foot.parag4}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="social-media-mobile">
        <p>FOLLOW US ON SOCIAL MEDIA</p>
        <img src={SocialMediaMobile} alt="" />
        <p>© 2022 Workjeje Inc. All Right Reserved</p>
      </div>
    </div>
  );
};

export default ReadyToStartHiringThroughUs;
