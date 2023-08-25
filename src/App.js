import React from "react";
import "./Style.scss";
import Navbar from "./components/Navbar";
import WorkGallery from "./Main/WorkGallery";
import PaintingGirl from "./Main/PaintingGirl";
import MultipleCity from "./Main/MultipleCity";
import ReadyToStart from "./Main/ReadyToStart";
import JoinOurNetwork from "./Main/JoinOurNetwork";
import GetJobDone from "./Main/GetJobDone";
import NavbarMobile from "./mobile/NavbarMobile";
import HireProfessional from "./mobile/HireProfessional";
import WorkGalleryMobile from "./mobile/WorkGalleryMobile";
import PaintMobile from "./mobile/PaintMobile";
import GetJobDoneMobile from "./mobile/GetJobDoneMobile";
import AvailableCitiesMobile from "./mobile/AvailableCitiesMobile";
import ReadyToStartHiringThroughUs from "./mobile/ReadyToStartHiringThroughUs";

const App = () => {
  return (
    <div className="app-container">
      <div className="app">
        <Navbar />
        <WorkGallery />
        <PaintingGirl />
        <JoinOurNetwork />
        <GetJobDone />
        <MultipleCity />
        <ReadyToStart />
      </div>
      <div className="mobile-view">
      <NavbarMobile />
      <HireProfessional />
      <WorkGalleryMobile />
      <PaintMobile />
      <GetJobDoneMobile />
      <AvailableCitiesMobile />
      <ReadyToStartHiringThroughUs />
    </div>
    </div>
  );
};

export default App;
