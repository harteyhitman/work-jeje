import React from 'react'
import Background from '../images/background.png'
import MakeOver from '../images/makeover-mobile.png'
import Camera from '../images/camera-mobile.png'
import Mechanic from '../images/mechanic-mobile.png'
import Delivery from '../images/delivery-mobile.png'
import WithAssurance from '../images/with-assurance.png'
import BlackBtnApple from '../images/blackBtn-apple.png'
import BlackBtnGoogle from '../images/blackBtn-google.png'

const WorkGalleryMobile = () => {
  return (
    <div className='work-gallery-mobile'>
    <div className="workGallery">
    <img className='background'  src={Background} alt="" />
    <img className='background'  src={MakeOver} alt="" />
    <img className='background'  src={Mechanic} alt="" />
    <img className='background'  src={Camera} alt="" />
    <img className='background'  src={Delivery} alt="" />
    </div>
    <div className="with-assurance-text">
    <img  src={WithAssurance} alt="" />
    </div>
    <div className="profs-btn-mobile">
    <img className="Mobile-Btn" src={BlackBtnApple} alt="" />
    <img className="Mobile-Btn" src={BlackBtnGoogle} alt="" />
  </div>
    </div>
  )
}

export default WorkGalleryMobile