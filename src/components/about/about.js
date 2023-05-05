import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectAbout from "../../assets/images/project-about.svg";
import Projectpic from "../../assets/images/project-pic.svg";
import Projectpicone from "../../assets/images/project-pic1.svg";
import "../../assets/globalStyle/globalStyle.css";
import "./about.css";
function About() {
  return (
    <section>
      <Container>
        <Row className="pb-5">
          <Col lg={6}>
            <div className="d-flex flex-column justify-content-center justify-content-lg-left">
              <h3 className="about-project-head">About this Project</h3>
              <div className="line-bottom"> </div>
              <div>
                <p className="pt-4 about-project-para">
                  Lectus erat, consectetur eu sapien eget rhoncus consectetur
                  sem.
                  <br /> Proin cursus, dolor a mollis consectetur, risus dolor
                  fermentum
                  <br /> massa, a commodo elit dui sit amet risus.
                </p>
                <ul className="about-project-para">
                  <li>Maecenas ornare nisl</li>
                  <li>A tortor ultrices bibendum</li>
                  <li> Nulla fermentum</li>
                  <li>Metus quis</li>
                  <li>Sodales tristique</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <img
              className="img-fluid"
              style={{ width: "100%" }}
              src={ProjectAbout}
              alt=""
            />
          </Col>
        </Row>
        <img
          className="py-5 img-fluid"
          style={{ width: "100%" }}
          src={Projectpic}
          alt=""
        />

        <Row className="py-3">
          <Col lg={6}>
            <img
              className="img-fluid pb-4"
              style={{ width: "100%" }}
              src={Projectpicone}
              alt=""
            />
          </Col>
          <Col lg={6}>
            <p className="about-project-para">
              Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
              erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
              cursus, dolor a mollis consectetur, risus dolor fermentum massa, a
              commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
              ultrices bibendum. Nulla fermentum, metus quis sodales tristique,
              augue mauris molestie augue non feugiat ligula neque nec felis.
            </p>
            <p className="py-3 about-project-para">
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum. Nulla fermentum, metus quis sodales
              tristique, augue mauris molestie augue, non feugiat ligula neque
              nec felis.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
