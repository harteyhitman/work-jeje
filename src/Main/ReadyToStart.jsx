import React from "react";
import AppleBlack from "../images/AppleBtnBlack.png";
import PlaystoreBlack from "../images/PlaystoreBlack.png";
import Logoimg from "../images/Logo - White.png";
import SocialMedia from "../images/Social Media.png";
import RightReserved from '../images/© 2022 Workjeje Inc. All Right Reserved.png'

const ReadyToStart = () => {
  return (
    <div className="ready-to-start">
      <div className="">
        <h1 className="ready-to-start-text">
          Ready to start hiring through us?
        </h1>
      </div>
      <div className="Black-btn">
        <img src={AppleBlack} alt="" />
        <img src={PlaystoreBlack} alt="" />
      </div>

      <div className="footer-container">
      <img className="Logoimg" src={Logoimg} alt="" />
        <div className="first-footer-container">
          
          <div className="workjeje-footer">
            <h4>Workjeje</h4>
            <p>About</p>
            <p>Features</p>
            <p>FAQs</p>
          </div>
          <div className="service-provider">
            <h4>Service provider</h4>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Download App</p>
          </div>
        </div>

        <div className="Social-media">
          <h3>Follow us on social Media</h3>
          <img className="social-media-img" src={SocialMedia} alt="" />
        </div>


        <div className="last-footer">
        <p className="colored-footer">Work jeje Offensive Content Policy</p>
        
        <p>
          Work jeje is committed to being a marketplace rooted in mutual
          understanding and respect. We want all who use Work jeje, regardless
          of their identities and lived experiences, to feel welcome and we
          endeavor to remove offensive content as and when we become aware of
          it. <br /> Offensive content includes anything generally viewed as
          discriminatory, disrespectful, inflammatory and/or disturbing, whether
          intentional or not. We moderate our marketplace for offensive content
          and welcome clients and service providers to also help us identify
          this type of content.
        </p>
        <img className="right-reserved" src={RightReserved} alt="" />
      </div>
      </div>
      
    </div>
  );
};

export default ReadyToStart;
