import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonReuse from "../ReusableComponent/button/button";
import ConstructionReuse from "../ReusableComponent/ConstructionReuse/ConstructionReuse";
import AboutOne from "../../assets/images/AboutOne.svg";
import AboutTwo from "../../assets/images/AboutTwo.svg";
import AboutThree from "../../assets/images/AboutThree.svg";
import ServiceHeaderImg from "../../assets/images/ServicesHeaderImg.png";
import "./serviceHeader.css";

function ServiceHeader() {
  return (
    <div className="service-bg-clr">
      <div
        className="service-container"
        style={{ backgroundImage: `url(${ServiceHeaderImg})` }}
      >
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className="service-banner-design">
                <h1 className="service-banner-heading" data-aos="fade-up">
                  Framing
                </h1>
                <p className="service-banner-text" data-aos="fade-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  quis <br /> egestas pellentesque libero dolor in diam
                  consequat ut.
                </p>
                <ButtonReuse
                  className="hvr-bob hvr-shutter-out-horizontal"
                  text="GET A QUOTE"
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
            <Col lg={6} md={12} sm={12} className="py-5">
              <div className="heading-styles py-4">
                <div className="py-3">
                  <ConstructionReuse
                    imageSrc={AboutOne}
                    title="Building Construction"
                    subtitle={
                      <>
                        Lorem ipsum dolor sit consectetur <br /> adipiscing
                        elit. Nullam lectus erat
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
                        Lorem ipsum dolor sit consectetur <br /> adipiscing
                        elit. Nullam lectus erat
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
                        Lorem ipsum dolor sit consectetur <br /> adipiscing
                        elit. Nullam lectus erat
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
      <section>
        <Container>
          <Row>
            <Col lg={6}>
              <p className="service-para-style">
                Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
                Proin <br />
                cursus, dolor a mollis consectetur, risus dolor fermentum massa,
                a <br />
                commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
                ultrices
                <br /> bibendum. Nulla fermentum, metus quis sodales tristique,
                augue mauris
                <br /> molestie augue, non feugiat ligula neque nec felis.
                <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus sed nibh <br />
                dignissim, cursus tellus sit amet, ultrices mauris. Aliquam
                blandit est in eros
                <br /> elementum, quis vehicula est suscipit. Proin cursus,
                dolor a mollis <br />
                consectetur, risus dolor fermentum massa, a commodo elit dui sit
                amet
                <br /> risus. Maecenas ornare nisl a tortor ultrices bibendum.
              </p>
            </Col>
            <Col lg={6}>
              <p className="service-para-style">
                Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
                erat,
                <br /> consectetur eu sapien eget rhoncus consectetur sem.
                <br /> Proin cursus, dolor a mollis consectetur, risus dolor
                fermentum massa, a<br /> commodo elit dui sit amet risus.
                Maecenas ornare nisl a tortor ultrices <br />
                bibendum. Nulla fermentum, metus quis sodales tristique, augue
                mauris
                <br /> molestie augue non feugiat ligula neque nec felis.
                <br />
                <br />
                Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
                Proin
                <br /> cursus, dolor a mollis consectetur, risus dolor fermentum
                massa, a <br />
                commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
                ultrices <br />
                bibendum.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default ServiceHeader;
