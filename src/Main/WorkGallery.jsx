import React from "react";
import PhotoGrapher from "../images/photographer.png";
import Makeup from "../images/makeup.png";
import Barber from "../images/barber.png";
import Mechanics from "../images/mechanics.png";
import Delivery from "../images/delivery.png";
import BtnAppleWhite from '../images/App Store white.png'
import BtnPlayWhite from '../images/play white.png'


const WorkGallery = () => {

  return (
    <div className="Gallery-container">
      <div id="work-gallery">
        <div className="tw0-column">
          <img className="work-gallery-img one" src={PhotoGrapher} alt="" />
          <img className="work-gallery-img two" src={Makeup} alt="" />
        </div>
        <img className="work-gallery-img three" src={Barber} alt="" />
        <div className="last-column">
          <img className="work-gallery-img four" src={Mechanics} alt="" />
          <img className="work-gallery-img five" src={Delivery} alt="" />
        </div>
      </div>
      <div className="gallery-text">
        <p>
          With assured customers safety to ease of use, you can hire and review
          a wide range of customer-centric service providers right from the
          comfort of your homes.
        </p>
      </div>
      <div id="gallery-Btn">
        <a href="https://play.google.com/store/apps/details?id=com.stellaredge.workjeje"><img className="applestore gallery-btn-img" src={BtnAppleWhite} alt="" /></a>
       <a href="https://apps.apple.com/ng/app/workjeje/id1628757239"> <img className="applestore gallery-btn-img" src={BtnPlayWhite} alt="" /></a>
      </div>
    </div>
  );
};

export default WorkGallery;
