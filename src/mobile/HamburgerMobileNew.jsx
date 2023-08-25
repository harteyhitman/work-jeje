import React from 'react'
import { useState } from 'react';
import MiniSocial from '../images/Social Media.png'
import CloseModal from '../images/close-nav.png'

const HamburgerMobileNew = () => {
    
        const [isModalOpen, setIsModalOpen] = useState(false);
      
        const handleMenuClick = () => {
          setIsModalOpen(true);
        };

        const handleCloseModal = () => {
          setIsModalOpen(false);
        };

        return (
          <div className="hamburger-mobile-new">
            <header>
              <div className="navbar-mobile-new">
                <div className="hamburger-mobile-new" onClick={handleMenuClick}>
                  <div className="line-mobile-new"></div>
                  <div className="line-mobile-new"></div>
                  <div className="line-mobile-new"></div>
                </div>
              </div>
            </header>
      
            {isModalOpen && (
              <div className="modal-mobile-new">           
               <div className="about-page">
               <div><span>01</span>About</div>
               <div><span>02</span>Features</div>
               <div><span>03</span> FAQ</div>               
               <div><span>04</span>Contact Us </div>               
               <div><span>05</span>Get Started</div>
               </div>

               <div className="reach-us">
               <div className="close-mobile-new">
               <img onClick={handleCloseModal} src={CloseModal} alt="" />
               </div>
               <p>Reach us</p>
               <p>E: hi@workjeje.com
               P: +234 8188 469 520, +234 7084 480 349, +1 628 258 0080
               </p>
               <p>Socials</p>
               <img src={MiniSocial} alt="" />
               </div>
              </div>
            )}
          
          </div>
        );
      }
      
  


export default HamburgerMobileNew