import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./SevicesHeader.css";
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
          <Col xs={6}>
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
            />
          </Col>
          <Col xs={6}>
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
                  textColor="white"
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
                  textColor="white"
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
                  textColor="white"
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
