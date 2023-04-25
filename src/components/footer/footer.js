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
    <Row>
      <Col xl={6} className="set-padding">
        <div className="footer-clr padding-clr py-5 px-4 ">
          <div className="maxWidth">
            <h3>Contact Us</h3>
            <div className="line-2"> </div>
            <form className="py-5 ">
              <div className="d-flex ">
                <div className="pb-4 ">
                  <input
                    className="text-field-3 px-3"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="pb-4  px-3">
                  <input
                    className="text-field-3 px-3"
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="pb-4">
                <input
                  className="text-field-4"
                  type="text"
                  placeholder="Message"
                />
              </div>
              <div className="d-flex justify-content-end ">
                <ButtonReuse
                  className=" btn-after hvr-grow hvr-shutter-out-vertical"
                  text="SEND MESSAGE"
                  border="4px"
                  borderColor="white"
                  backgroundColor="#FFB400"
                  textColor="white"
                  fontSize="14"
                  fontWeight="600"
                  width="184"
                  height="40"
                />
              </div>
            </form>
          </div>
        </div>
      </Col>
      <Col xl={6} className="set-padding">
        <div className="upper-clr py-4">
          <div className="d-flex justify-content-center ">
            <img style={{ paddingRight: "2rem" }} src={Facebook} alt="" />
            <img style={{ paddingRight: "2rem" }} src={Twitter} alt="" />
            <img src={Linkedin} alt="" />
          </div>
        </div>
        <div className="d-flex flex-column  ">
          <div className="px-5 py-3 pt-5">
            <img src={Location} alt="" />
            <span className="" style={{ padding: "20px", fontWeight: "600" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
          <div className="px-5 py-3">
            <img src={Phone} alt="" />
            <span className="" style={{ padding: "20px", fontWeight: "600" }}>
              +00 123 456 78
            </span>
          </div>
          <div className="px-5 py-3">
            <img src={Mail} alt="" />
            <span className="" style={{ padding: "20px", fontWeight: "600" }}>
              constractioninc@gmail.com
            </span>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Footer;
