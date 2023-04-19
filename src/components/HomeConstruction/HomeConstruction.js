import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./HomeConstruction.css";
// import ConstructionReuse from '../../components/ConstructionReuse/ConstructionReuse';
import CustomHomeComponent from '../../components/CustomHomeComponent/CustomHomeComponent';
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
            <CustomHomeComponent
              imageSrc={HomeOne}
              heading="Building Construction"
            />
            <CustomHomeComponent imageSrc={HomeFour} heading="Foundation" />
          </Col>
          <Col lg={4} className="pb-4">
            <CustomHomeComponent
              imageSrc={HomeTwo}
              heading="Building Repairs"
            />
            <CustomHomeComponent
              imageSrc={HomeFive}
              heading="Painting & Exterior"
            />
          </Col>
          <Col lg={4}>
            <CustomHomeComponent imageSrc={HomeThree} heading="Demolition" />
            <CustomHomeComponent imageSrc={HomeSix} heading="Site Management" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeConstruction
