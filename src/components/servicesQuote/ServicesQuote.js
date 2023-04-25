import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./ServicesQuote.css";
import ButtonReuse from '../../components/button/button';
function ServicesQuote() {
  return (
    <div>
      <div className="shadow py-4">
        <Container>
          <Row>
            <Col lg={6} className="d-flex align-items-center">
              <div className="py-2">
                <h2 className="about-projectHead ">
                  Get a Quote For Your Project
                </h2>
              </div>
            </Col>
            <Col lg={6} className="d-flex align-items-center">
              <div className="card-body p-4 d-flex justify-content-lg-end justify-content-center">
                <ButtonReuse
                  className=" btn-after hvr-shrink hvr-shutter-out-vertical"
                  text="FREE QUOTE"
                  border="3px" // Set border width to 1px
                  borderColor="#FFB400"
                  backgroundColor="white"
                  textColor="#FFB400"
                  fontSize="14"
                  fontWeight="600"
                  width="230"
                  height="65"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ServicesQuote
