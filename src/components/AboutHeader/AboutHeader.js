import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeMainImg from "../../assets/images/home-head.png";
import ConstructionReuse from "../ReusableComponent/ConstructionReuse/ConstructionReuse";
import ButtonReuse from "../ReusableComponent/button/button";
import AboutOne from "../../assets/images/AboutOne.svg";
import AboutTwo from "../../assets/images/AboutTwo.svg";
import AboutThree from "../../assets/images/AboutThree.svg";
import "./AboutHeader.css";


const AboutHeader = () => {
  return (
    <div
      className="about-container"
      style={{ backgroundImage: `url(${HomeMainImg})` }}
    >
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <div className="about-banner-design">
              <h1 className="about-banner-heading" data-aos="fade-up">
                About Our Construction Company
              </h1>
              <p className="about-banner-text py-3" data-aos="fade-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
                egestas <br /> pellentesque libero dolor in diam consequat ut.
                Mi nibh amet viverra id <br /> aliquet neque odio.
              </p>
              <ButtonReuse
                className="hvr-bob hvr-shutter-out-horizontal"
                text="GET A FREE QUOTE"
                border="4px"
                borderColor="#FFB400"
                backgroundColor="#FFB400"
                textColor="#fff"
                fontSize="14"
                fontWeight="500"
                padding="8px 2.5rem"
              />
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className="heading-styles">
              <h3 className="heading-color">What We Do</h3>
              <div className="py-3">
                <ConstructionReuse
                  imageSrc={AboutOne}
                  title="Building Construction"
                  subtitle={
                    <>
                      Lorem ipsum dolor sit consectetur <br /> adipiscing elit.
                      Nullam lectus erat
                    </>
                  }
                  isFlex={true}
                  titleTextColor="white"
                  subtitleTextColor="white"
                />
              </div>
              <div className="py-3">
                <ConstructionReuse
                  imageSrc={AboutTwo}
                  title="Building Repairs"
                  subtitle={
                    <>
                      Lorem ipsum dolor sit consectetur <br /> adipiscing elit.
                      Nullam lectus erat
                    </>
                  }
                  isFlex={true}
                  titleTextColor="white"
                  subtitleTextColor="white"
                />
              </div>
              <div className="py-3">
                <ConstructionReuse
                  imageSrc={AboutThree}
                  title="Custom Design"
                  subtitle={
                    <>
                      Lorem ipsum dolor sit consectetur <br /> adipiscing elit.
                      Nullam lectus erat
                    </>
                  }
                  isFlex={true}
                  titleTextColor="white"
                  subtitleTextColor="white"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutHeader;
