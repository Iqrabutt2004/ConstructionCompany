import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./HomeConstruction.css";
import ConstructionReuse from '../../components/ConstructionReuse/ConstructionReuse';
import HomeOne from "../../assets/images/HomeOne.svg";
import HomeTwo from "../../assets/images/HomeTwo.svg";
import HomeThree from "../../assets/images/HomeThree.svg";
import HomeFour from "../../assets/images/HomeFour.svg";
import HomeFive from "../../assets/images/HomeFive.svg";
import HomeSix from "../../assets/images/HomeSix.svg";
function HomeConstruction() {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg={4} className="pb-4">
            <ConstructionReuse
              imageSrc={HomeOne}
              title="Building Construction"
              subtitle={
                <>
                  Lorem ipsum dolor sit consectetur <br /> adipiscing elit.
                  Nullam lectus erat
                </>
              }
            />
          </Col>
          <Col lg={4} className="pb-4">
            <ConstructionReuse
              imageSrc={HomeTwo}
              title="Building Repairs"
              subtitle={
                <>
                  Lorem ipsum dolor sit consectetur <br /> adipiscing elit.
                  Nullam lectus erat
                </>
              }
            />
          </Col>
          <Col lg={4}>
            <ConstructionReuse
              imageSrc={HomeThree}
              title="Demolition"
              subtitle={
                <>
                  Lorem ipsum dolor sit consectetur <br /> adipiscing elit.
                  Nullam lectus erat
                </>
              }
            />
          </Col>
        </Row>
        <Row className="py-5">
          <Col lg={4} className="pb-4">
            <ConstructionReuse
              imageSrc={HomeFour}
              title="Foundation"
              subtitle={
                <>
                  Lorem ipsum dolor sit consectetur <br /> adipiscing elit.
                  Nullam lectus erat
                </>
              }
            />
          </Col>
          <Col lg={4} className="pb-4">
            <ConstructionReuse
              imageSrc={HomeFive}
              title="Painting & Exterior"
              subtitle={
                <>
                  Lorem ipsum dolor sit consectetur <br /> adipiscing elit.
                  Nullam lectus erat
                </>
              }
            />
          </Col>
          <Col lg={4}>
            <ConstructionReuse
              imageSrc={HomeSix}
              title="Site Management"
              subtitle={
                <>
                  Lorem ipsum dolor sit consectetur <br /> adipiscing elit.
                  Nullam lectus erat
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeConstruction
