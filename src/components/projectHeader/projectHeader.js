import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./projectHeader.css";
import ProjectHeaderPic from "../../assets/images/ProjectHeaderImg.png";
const ProjectHeader =() => {
  return (
    <div
      className="project-container"
      style={{ backgroundImage: `url(${ProjectHeaderPic})` }}
    >
      <Container>
        <Row>
          <Col md={6}>
            <div className=" project-style">
              <div className="lineStyle-project"></div>
              <h1 className="text-white">Monarch HQ Project</h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
                <br />
                egestas pellentesque libero dolor in diam consequat ut.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-white">
              <p>Date: 12 April 2018 </p>
              <p>Client: Monarch Group</p>
              <p>Project Type: Building Renovation</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectHeader;
