import React from "react";
import PlacesVisited from "../images/place visited.png";
import Lady from "../images/workjeje lady.png";
import ArrowCurve from '../images/arrow-right-circle.png'

const JoinOurNetwork = () => {
  return (
    <div className="join-our-network">
      <div className="join-net-left">
        <p className="professional">PROFESSIONAL APP</p>
        <h2>Join our network of customer-centric service providers</h2>
        <p className="network-text">
          Do you manage a customer-centric service business or are you a
          qualified freelance service provider? 
          <p className="network-text">
          Leverage our platform to connect
          with potential customers around your business location and get paid
          for a job well done.
          </p>
        </p>
        <button className="button-btn-network"><a href="https://www.workjeje.com/">Sign up as a Pro</a> <img className="arrow-curve" src={ArrowCurve} alt="" /></button>
      </div>
      <div className="join-net-right">
        <img
          className="dark-lady-place-visited"
          src={PlacesVisited}
          alt=""
        />
        <img className="Dark-lady" src={Lady} alt="" />
      </div>
    </div>
  );
};

export default JoinOurNetwork;
