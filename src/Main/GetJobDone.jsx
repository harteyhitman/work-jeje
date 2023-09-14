import React from "react";
import PeruWave from "../images/perui cave staright.png";
import JobDone from "./JobDone";
import AppleBtnMobile from '../images/appleBtn-mobile.png'
import GoogleBtnMobile from '../images/googleBtn-mobile.png'

const GetJobDone = (props) => {

  return (
    <div className="get-job-done">
      <h1 className="getjobdone-big-text">Get Jobs done with ease.</h1>
      {JobDone.map((jobs)=>(
        <div key={jobs.id} className='collect-data'>
        <img id="job-icons" src={jobs.icons} alt='' />
        <div className="text-job-div">
        <h3 className="jobs-big-text">{jobs.bigtext}</h3>
        <p className="jobs-small-text">{jobs.smalltext}</p>
        </div>
        </div>
      ))}
      <div className="div-peru-wave">
        <img className="staright-perui-cave" src={PeruWave} alt="" />
        <div className="perui-text">
          <h1 className="perui-text-big-text">We are committed to your safety.</h1>
          <p className="perui-text-small-text">Work Jeje service providers are kyc verified.</p>

          <div className="profs-btn-mobile">
       <a href="https://apps.apple.com/ng/app/workjeje/id1628757239">
       <img className="Mobile-Btn" src={AppleBtnMobile} alt="" /></a>   
         <a href="https://play.google.com/store/apps/details?id=com.stellaredge.workjeje">
         <img className="Mobile-Btn" src={GoogleBtnMobile} alt="" /></a> 
        </div>
        </div>
      </div>
    </div>
  );
};

export default GetJobDone;
