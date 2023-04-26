import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import HomeMainImg from "../../assets/images/home-head.png";
import ButtonReuse from "../../components/button/button";
import HeaderReuse from "../../components/HeaderReuse/HeaderReuse";
import ConstructionReuse from "../../components/ConstructionReuse/ConstructionReuse";
import AboutOne from "../../assets/images/AboutOne.svg";
import AboutTwo from "../../assets/images/AboutTwo.svg";
import AboutThree from "../../assets/images/AboutThree.svg";

const SevicesHeader = () => {
  return (
    <div
      className="about-container"
      style={{ backgroundImage: `url(${HomeMainImg})` }}
    >
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <HeaderReuse
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
            />
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
