import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./ServicesQuote.css";
import ButtonReuse from '../../components/button/button';
function ServicesQuote() {
  return (
    <div>
      <div className="shadow ">
        <Container>
          <Row>
            <Col lg={6} className="d-flex align-items-center">
              <div className="card-title py-2">
                <h2>Get a Quote For Your Project</h2>
              </div>
            </Col>
            <Col lg={6} className="d-flex align-items-center">
              <div className="card-body p-4 d-flex justify-content-lg-end justify-content-center">
                <ButtonReuse
                  text="FREE QUOTE"
                  border="3px" // Set border width to 1px
                  borderColor="#FFB400"
                  backgroundColor="white"
                  textColor="#FFB400"
                  fontSize="14"
                  fontWeight="500"
                  width="180"
                  height="42"
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
