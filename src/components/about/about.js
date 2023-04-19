import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectAbout from "../../assets/images/project-about.svg"
import Projectpic from "../../assets/images/project-pic.svg"
import Projectpicone from "../../assets/images/project-pic1.svg";
import "../../assets/globalStyle/globalStyle.css"
import "./about.css";
// import ReusableButton from "../button/button";
function About() {
  return (
    <section>
      <Container className="py-5">
        <Row>
          <Col lg={6}>
            <div className="d-flex flex-column justify-content-center justify-content-lg-left">
              <h3 className="">About this Project</h3>
              <div className="line-style-4"> </div>
              <div>
                <p className="pt-4 text-muted">
                  Lectus erat, consectetur eu sapien eget rhoncus consectetur
                  sem. Proin cursus, dolor a mollis consectetur, risus dolor
                  fermentum massa, a commodo elit dui sit amet risus.
                </p>
                <ul className="text-muted">
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

        <Row>
          <Col lg={6}>
            <img
              className="img-fluid"
              style={{ width: "100%" }}
              src={Projectpicone}
              alt=""
            />
          </Col>
          <Col lg={6} className="text-muted">
            <p>
              Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
              erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
              cursus, dolor a mollis consectetur, risus dolor fermentum massa, a
              commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
              ultrices bibendum. Nulla fermentum, metus quis sodales tristique,
              augue mauris molestie augue non feugiat ligula neque nec felis.
            </p>
            <p className="py-3">
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum. Nulla fermentum, metus quis sodales
              tristique, augue mauris molestie augue, non feugiat ligula neque
              nec felis.
            </p>
          </Col>
        </Row>
        {/* <ReusableButton onClick={handleClick} text="Click me!" style={style} />
        <ReusableButton onClick={handleClick2} text="Log in!" style={style} /> */}
      </Container>
    </section>
  );
}

export default About;
