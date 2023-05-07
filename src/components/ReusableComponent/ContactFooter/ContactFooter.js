import React from 'react'
import Facebook from "../../../assets/images/facebook.svg";
import Twitter from "../../../assets/images/twitter.svg";
import Linkedin from "../../../assets/images/linkedin.svg";
import Location from "../../../assets/images/location.svg";
import Phone from "../../../assets/images/phone.svg";
import Mail from "../../../assets/images/mail.svg";
import "./ContactFooter.css";

function ContactFooter() {
  return (
    <>
        <div className="upper-color py-4">
          <div className="d-flex justify-content-center">
            <img className="cursor-icon social-icons" src={Facebook} alt="" />
            <img className="cursor-icon social-icons" src={Twitter} alt="" />
            <img className="cursor-icon" src={Linkedin} alt="" />
          </div>
        </div>
        <div className="d-flex flex-column footer-details">
          <div className="pt-4">
            <img src={Location} alt="location-icon" />
            <span className="footer-call">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
          <div className="pt-4">
            <img src={Phone} alt="phone-icon" />
            <span className="footer-call">+00 123 456 78</span>
          </div>
          <div className="pt-4">
            <img src={Mail} alt="mail-icon" />
            <span className="footer-call">constractioninc@gmail.com</span>
          </div>
        </div>
    </>
  );
}

export default ContactFooter
