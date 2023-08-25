import React from 'react'
import PaintGirl from '../images/specialist aids.png'
import SignUpLogo from '../images/signup-logo.png'
import Mobile from '../images/mobile-place-visited.png'
import SmileGirl from '../images/lady-workjeje-smile.png'

const PaintMobile = () => {
  return (
    <div className='paint-mobile'>
    <div className="paint-girl">
    <img src={PaintGirl} alt="" />
    </div>
    <div className="professional-app">
    <h4>PROFESSIONAL APP</h4>
    <h2>Join our network of customer-centric service providers</h2>
    <p>Do you manage a customer-centric service business or are you a qualified freelance service provider?
    </p>
    <br />
    <p>
    Leverage our platform to connect with potential 
    customers around your business location and 
    get paid for a job well done.</p>
    <button className='sign-up-as-a-pro'><a href="#http">Sign Up as a Pro <img src={SignUpLogo} alt="" /></a></button>
    </div>
    <div className="smiling-lady-mobile">
    <img className='smile-mobile the-mobile' src={Mobile} alt="" />
    <img className='smile-mobile the-lady' src={SmileGirl} alt="" />
    </div>
    </div>
  )
}

export default PaintMobile