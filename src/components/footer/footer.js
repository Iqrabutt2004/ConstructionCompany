import React from "react";
import Facebook from "../../assets/images/facebook.svg";
import Twitter from "../../assets/images/twitter.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Location from "../../assets/images/location.svg";
import Phone from "../../assets/images/phone.svg";
import Mail from "../../assets/images/mail.svg";
import ButtonReuse from "../ReusableComponent/button/button";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="parent-flex">
        <div className="footer-flex-one">
          <div className="max-width-footer">
            <h3>Contact Us</h3>
            <div className="line-two"></div>
            <form className="py-5">
              <div className="input-flex">
                <input
                  className="footer-name-field"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="footer-name-field"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <textarea
                className="footer-message-field"
                type="text"
                placeholder="Message"
              />
              <div className="d-flex justify-content-end">
                <ButtonReuse
                  text="SEND MESSAGE"
                  border="4px"
                  borderColor="white"
                  backgroundColor="#FFB400"
                  textColor="white"
                  fontSize="14"
                  fontWeight="600"
                  padding="2px 1.5rem"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="footer-flex-two">
          <div className="upper-color py-4">
            <div className="d-flex justify-content-center ">
              <img className="cursor-icon social-icons" src={Facebook} alt="" />
              <img className="cursor-icon social-icons" src={Twitter} alt="" />
              <img className="cursor-icon " src={Linkedin} alt="" />
            </div>
          </div>
          <div className="d-flex flex-column footer-details">
            <div className="pt-4">
              <img src={Location} alt="" />
              <span className="footer-call">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
            <div className="pt-4">
              <img src={Phone} alt="" />
              <a href="tel:+0012345678" className="footer-call">
                +00 123 456 78
              </a>
            </div>
            <div className="pt-4">
              <img src={Mail} alt="" />
              <a href="mailto:constractioninc@gmail.com">
                constractioninc@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
