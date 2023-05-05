import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeMainImg from "../../assets/images/home-head.png";
import ButtonReuse from "../ReusableComponent/button/button";
import ConstructionReuse from "../ReusableComponent/ConstructionReuse/ConstructionReuse";
import AboutOne from "../../assets/images/AboutOne.svg";
import AboutTwo from "../../assets/images/AboutTwo.svg";
import AboutThree from "../../assets/images/AboutThree.svg";
import "./SevicesHeader.css";

const SevicesHeader = () => {
  return (
    <div
      className="about-container"
      style={{ backgroundImage: `url(${HomeMainImg})` }}
    >
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <div className="services-banner-design">
              <h1 className="services-banner-heading" data-aos="fade-up">
                Our Construction <br/> Services
              </h1>
              <p className="services-banner-text" data-aos="fade-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis<br/>
                egestas pellentesque libero dolor in diam consequat ut.
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
            {/* <HeaderReuse
              title={
                <>
                  Our Construction
                  <br /> Services
                </>
              }
              subtitle={
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  quis
                  <br />
                  egestas pellentesque libero dolor in diam consequat ut.
                </>
              }
              className="my-header-reuse"
              buttonText="GET A FREE QUOTE"
            /> */}
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

export default SevicesHeader;
