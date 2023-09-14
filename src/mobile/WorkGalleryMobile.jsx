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
    <a href="https://apps.apple.com/ng/app/workjeje/id1628757239"><img className="Mobile-Btn" src={BlackBtnApple} alt="" /></a>
    <a href="https://play.google.com/store/apps/details?id=com.stellaredge.workjeje"><img className="Mobile-Btn" src={BlackBtnGoogle} alt="" /></a>
  </div>
    </div>
  )
}

export default WorkGalleryMobile