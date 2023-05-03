import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ConstructionReuse from "../../components/ConstructionReuse/ConstructionReuse";
import HeaderReuse from "../../components/HeaderReuse/HeaderReuse";
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
              <HeaderReuse
                title={<>Framing</>}
                subtitle={
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    quis
                    <br />
                    egestas pellentesque libero dolor in diam consequat ut.
                  </>
                }
                className="my-header-reuse"
                buttonText="GET A QUOTE"
              />
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
