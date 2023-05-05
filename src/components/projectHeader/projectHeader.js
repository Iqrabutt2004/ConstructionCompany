import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectHeaderPic from "../../assets/images/ProjectHeaderImg.png";
import "./projectHeader.css";

const ProjectHeader = () => {
  return (
    <div
      className="project-container"
      style={{ backgroundImage: `url(${ProjectHeaderPic})` }}
    >
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="project-banner-design">
              <h1 className="project-banner-heading" data-aos="fade-up">
                Monarch HQ Project
              </h1>
              <p className="project-banner-text py-3" data-aos="fade-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
                <br />
                egestas pellentesque libero dolor in diam consequat ut.
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="project-header" data-aos="fade-left">
              <p className="client-details">Date: 12 April 2018 </p>
              <p className="client-details">Client: Monarch Group</p>
              <p className="client-details">
                Project Type: Building Renovation
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectHeader;
