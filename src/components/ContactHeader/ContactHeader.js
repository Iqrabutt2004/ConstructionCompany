import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {  useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./ContactHeader.css";
import  ContactPagePic from "../../assets/images/MainPageImg.png";
import HeaderReuse from "../../components/HeaderReuse/HeaderReuse";
import Facebook from "../../assets/images/facebook-1.svg";
import Twitter from "../../assets/images/twitter-1.svg";
import Linkedin from "../../assets/images/linkedin-1.svg";
const ContactHeader = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Row>
        <Col lg={9} className="p-0">
          <div
            className="Contact-container"
            style={{ backgroundImage: `url(${ContactPagePic})` }}
          >
            <div className="d-flex justify-content-center p-0">
              <HeaderReuse
                title={<>Contact Us</>}
                subtitle={
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    quis egestas
                    <br /> pellentesque libero dolor in diam consequat ut. Mi
                    nibh amet viverra id
                    <br /> aliquet neque odio.
                  </>
                }
                buttonText="VIEW OUR WORK"
                buttonProps={{
                  text: "SEND A MESSAGE",
                  border: "0px",
                  borderColor: "#FFB400",
                  backgroundColor: "#FFB400",
                  textColor: "white",
                  fontSize: "14",
                  fontWeight: "600",
                  width: "180",
                  height: "42",
                }}
                className="custom-class-1"
                data-aos="fade-left"
              />
            </div>
          </div>
        </Col>
        <Col lg={3} className="clr-main p-0 ">
          <div className="py-3 px-4 contact-small">
            <h2 className="py-1 " data-aos="fade-up">
              Contact Info
            </h2>

            <div className="pb-4">
              <p style={{ fontWeight: "700" }} data-aos="fade-left">
                Our Office
              </p>

              <p data-aos="fade-left">
                1234 Divi St. #1000, San Francisc, CA
                <br />
                93251
              </p>
            </div>
            <div className="pb-4">
              <p style={{ fontWeight: "700" }} data-aos="fade-left">
                Open Office Hours
              </p>
              <p data-aos="fade-left">
                M-F: 9am - 6pm <br />
                S-S: 10am - 4pm
              </p>
            </div>
            <div className="pb-4">
              <p style={{ fontWeight: "700" }} data-aos="fade-left">
                Get in Touch
              </p>
              <p data-aos="fade-left">
                constructioninc.com
                <br /> (346) 426-2351
              </p>
            </div>
            <div className="d-flex pb-2 ">
              <img style={{ paddingRight: "2rem" }} src={Facebook} alt="" />
              <img style={{ paddingRight: "2rem" }} src={Twitter} alt="" />
              <img src={Linkedin} alt="" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactHeader;
