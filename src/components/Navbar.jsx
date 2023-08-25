import React from "react";
import Logo from "../images/Logo - White.png";
import RateStar from "../images/Rating Star.png";
import HireProfs from "./HireProfs";
import HamburgerNavbar from '../components/HamburgerNavbar'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div id="navbar-hambur">
        <div className="text-images">
          <img className="logo" src={Logo} alt="" />{" "}
          <p className="text-workjeje">Workjeje</p>
        </div>
        <HamburgerNavbar  />
      </div>
      <div className="stars">
        <span>
          <img src={RateStar} alt="" />
        </span>
        <span>
          <img src={RateStar} alt="" />
        </span>
        <span>
          <img src={RateStar} alt="" />
        </span>
        <span>
          <img src={RateStar} alt="" />
        </span>
        <span>
          <img src={RateStar} alt="" />
        </span>
      </div>
      <HireProfs />
    </div>
  );
};

export default Navbar;
