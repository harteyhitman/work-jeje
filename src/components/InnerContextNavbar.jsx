import SmallSocials from "../images/navbar-socials.png";
import CloseNav from "../images/close-nav.png";


const InnerContextNavbar = ({toggleMenu}) => {


  return (
    <div className="modal-container">
      <div className="menu-items">
        <ul>
          <li>About</li>
          <li>Features</li>
          <li>FAQS</li>
          <li>Contact Us</li>
          <li>Get Started</li>
        </ul>
      </div>
      <div className="contact-and-social-media">
        <p>Reach us</p>
        <p>
          E: hi@workjeje.com P: +234 8188 469 520, +234 7084 480 349, +1 628 258
          0080
        </p>
        <p>Socials</p>
        <img src={SmallSocials} alt="" />
        <div >
          <img  id="Close-nav" onClick={toggleMenu} src={CloseNav} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InnerContextNavbar;
