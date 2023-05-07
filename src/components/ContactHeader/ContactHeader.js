import React from "react";
import ContactPagePic from "../../assets/images/MainPageImg.png";
import Facebook from "../../assets/images/facebook-1.svg";
import Twitter from "../../assets/images/twitter-1.svg";
import Linkedin from "../../assets/images/linkedin-1.svg";
import ButtonReuse from "../ReusableComponent/button/button";
import "./ContactHeader.css";

const ContactHeader = () => {
  return (
    <div>
      <div className="contact-flex">
        <div className="p-0 contact-flex-one">
          <div
            className="contact-container"
            style={{ backgroundImage: `url(${ContactPagePic})` }}
          >
            <div className="d-flex justify-content-center p-0">
              <div className="contact-banner-design">
                <h1 className="contact-banner-heading" data-aos="fade-up">
                  Contact Us
                </h1>
                <p className="contact-banner-text" data-aos="fade-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  quis egestas <br /> pellentesque libero dolor in diam
                  consequat ut. Mi nibh amet viverra id <br /> aliquet neque
                  odio.
                </p>
                <ButtonReuse
                  className="hvr-bob hvr-shutter-out-horizontal"
                  text="SEND A MESSAGE"
                  border="4px"
                  borderColor="#FFB400"
                  backgroundColor="#FFB400"
                  textColor="#fff"
                  fontSize="14"
                  fontWeight="500"
                  padding="8px 2.5rem"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="clr-main p-0 contact-flex-two">
          <div className="py-3 px-4 contact-small">
            <h2 className="py-1 " data-aos="fade-up">
              Contact Info
            </h2>
            <div className="pb-4">
              <p className="banner-heading" data-aos="fade-left">
                Our Office
              </p>
              <p data-aos="fade-left">
                1234 Divi St. #1000, San Francisc, CA
                <br />
                93251
              </p>
            </div>
            <div className="pb-4">
              <p className="banner-heading" data-aos="fade-left">
                Open Office Hours
              </p>
              <p data-aos="fade-left">
                M-F: 9am - 6pm <br />
                S-S: 10am - 4pm
              </p>
            </div>
            <div className="pb-4">
              <p className="banner-heading" data-aos="fade-left">
                Get in Touch
              </p>
              <p data-aos="fade-left">
                constructioninc.com
                <br /> (346) 426-2351
              </p>
            </div>
            <div className="d-flex icons pb-2 ">
              <img className="icon-banner" src={Facebook} alt="facebook-icon" />
              <img className="icon-banner" src={Twitter} alt="twitter-icon" />
              <img src={Linkedin} alt="linkedin-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
