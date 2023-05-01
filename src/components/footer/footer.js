import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
import Facebook from "../../assets/images/facebook.svg";
import Twitter from "../../assets/images/twitter.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Location from "../../assets/images/location.svg";
import Phone from "../../assets/images/phone.svg";
import Mail from "../../assets/images/mail.svg";
import ButtonReuse from "../button/button";

function Footer() {
  return (
    <div>

      <div className="parent-flex">
        <div className="footer-flex-1 footer-clr ">
          <div className="maxWidth">
            <h3>Contact Us</h3>
            <div className="line-2"> </div>
            <form className="py-5">
              <div className="input-flex ">
                <input
                  className="text-field-3"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="text-field-3"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <textarea
                className="text-field-4"
                type="text"
                placeholder="Message"
              />

              <div className="d-flex justify-content-end ">
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
        <div className="footer-flex-2">
          <div className="upper-clr py-4">
            <div className="d-flex justify-content-center ">
              <img style={{ paddingRight: "2rem" }} src={Facebook} alt="" />
              <img style={{ paddingRight: "2rem" }} src={Twitter} alt="" />
              <img src={Linkedin} alt="" />
            </div>
          </div>
          <div className="d-flex flex-column Footer-details  ">
            <div className="pt-4">
              <img src={Location} alt="" />
              <span className="footer-call">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
            <div className="pt-4">
              <img src={Phone} alt="" />
              <span className="footer-call">+00 123 456 78</span>
            </div>
            <div className="pt-4">
              <img src={Mail} alt="" />
              <span className="footer-call">constractioninc@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
