import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutDivi.css";
function AboutDivi() {
  return (
    <section>
      <Container>
        <div className="text-center py-4">
          <h3 className="divi-style">About Divi Construction</h3>
          <div className="text-center line-style-5"></div>
        </div>
        <Row>
          <Col lg={6}>
            <p className="service-para-style d-flex justify-content-center">
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              <br />
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              <br />
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              <br />
              tortor ultrices bibendum. Nulla fermentum, metus quis sodales
              <br />
              tristique, augue mauris molestie augue, non feugiat ligula neque
              nec
              <br /> felis.
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus sed <br />
              nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam
              blandit <br /> est in eros elementum, quis vehicula est suscipit.
            </p>
          </Col>
          <Col lg={6}>
            <p className="service-para-style d-flex justify-content-center">
              Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
              erat, <br />
              consectetur eu sapien eget rhoncus consectetur sem. <br /> Proin
              cursus, dolor a mollis consectetur, risus dolor fermentum massa,
              <br /> a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor <br />
              ultrices bibendum. Nulla fermentum, metus quis sodales tristique,{" "}
              <br />
              augue mauris molestie augue non feugiat ligula neque nec felis.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutDivi;
