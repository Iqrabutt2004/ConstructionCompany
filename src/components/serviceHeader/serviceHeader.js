import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ConstructionReuse from "../../components/ConstructionReuse/ConstructionReuse";
import HeaderReuse from "../../components/HeaderReuse/HeaderReuse";
import AboutOne from "../../assets/images/AboutOne.svg";
import AboutTwo from "../../assets/images/AboutTwo.svg";
import AboutThree from "../../assets/images/AboutThree.svg";
import ServiceHeaderImg from "../../assets/images/ServicesHeaderImg.png";
import "./serviceHeader.css";
// import ButtonReuse from "../../components/button/button";
function ServiceHeader() {
  return (
    <div className="service-bgClr">
      <div
        className="service-container"
        style={{ backgroundImage: `url(${ServiceHeaderImg})` }}
      >
        <Container>
          <Row>
            <Col xs={6}>
              <div className="d-flex justify-content-center align-items-center">
                <HeaderReuse
                  title={<>Framing</>}
                  subtitle={
                    <>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut quis
                      <br />
                      egestas pellentesque libero dolor in diam consequat ut.
                    </>
                  }
                  buttonText="GET A FREE QUOTE"
                  buttonProps={{
                    text: "GET A FREE QUOTE",
                    border: "0px",
                    borderColor: "#FFB400",
                    backgroundColor: "#FFB400",
                    textColor: "white",
                    fontSize: "14",
                    fontWeight: "600",
                    width: "180",
                    height: "42",
                         
                  }}
                      className="custom-class-2"
                />
              </div>
            </Col>
            <Col xs={6}>
              <div className="heading-styles">
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
                    textColor="white" // Pass 'textColor' prop with desired color value to set the text color
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
                    textColor="white" // Pass 'textColor' prop with desired color value to set the text color
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
                    textColor="white" // Pass 'textColor' prop with desired color value to set the text color
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="py-5">
        <Row>
          <Col lg={6}>
            <p>
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum. Nulla fermentum, metus quis sodales
              tristique, augue mauris molestie augue, non feugiat ligula neque
              nec felis. <br /> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit
              amet, ultrices mauris. Aliquam blandit est in eros elementum, quis
              vehicula est suscipit. Proin cursus, dolor a mollis consectetur,
              risus dolor fermentum massa, a commodo elit dui sit amet risus.
              Maecenas ornare nisl a tortor ultrices bibendum.
            </p>
          </Col>
          <Col lg={6}>
            <p>
              Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
              erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
              cursus, dolor a mollis consectetur, risus dolor fermentum massa, a
              commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
              ultrices bibendum. Nulla fermentum, metus quis sodales tristique,
              augue mauris molestie augue non feugiat ligula neque nec felis.
              <br />
              <br />
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServiceHeader;
