import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import HomeOne from "../../assets/images/HomeOne.svg";
import HomeTwo from "../../assets/images/HomeTwo.svg";
import HomeThree from "../../assets/images/HomeThree.svg";
import HomeFour from "../../assets/images/HomeFour.svg";
import HomeFive from "../../assets/images/HomeFive.svg";
import HomeSix from "../../assets/images/HomeSix.svg";
import CustomHomeComponent from "../../components/CustomHomeComponent/CustomHomeComponent";
import "./HomeConstruction.css";
function HomeConstruction() {
  return (
    <section>
      <Container>
        <Row className='d-flex justify-content-around'>
          <Col lg={3} >
            <CustomHomeComponent
              imageSrc={HomeOne}
              heading="Building Construction"
            />
            <CustomHomeComponent
              imageSrc={HomeFour}
              heading="Foundation" 
             />
          </Col>
          <Col lg={3} >
            <CustomHomeComponent
              imageSrc={HomeTwo}
              heading="Building Repairs"
            />
            <CustomHomeComponent
              imageSrc={HomeFive}
              heading="Painting & Exterior"
            />
          </Col>
          <Col lg={3}>
            <CustomHomeComponent 
             imageSrc={HomeThree} 
             heading="Demolition" 
             />

            <CustomHomeComponent 
              imageSrc={HomeSix} 
              heading="Site Management"
             />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeConstruction
