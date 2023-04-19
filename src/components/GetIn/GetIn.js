import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./GetIn.css";
import ButtonReuse from "../../components/button/button";
import CardFaq from "../card-faq/CardFaq";

function GetIn() {
  return (
    <div className="service-bgClr py-4">
      <Container>
        <Row className="flex-wrap">
          <Col lg={6} className="pb-5">
            <h2>Get In Touch</h2>
            <div className="line-style-4"></div>
            <form className="py-5 d-flex flex-column" style={{width:"538px"}}>
              <div className="pb-4">
                <input
                  className="text-field px-3"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="pb-4">
                <input
                  className="text-field px-3"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="pb-4">
                <input
                  className="text-field-1"
                  type="text"
                  placeholder="Message"
                />
              </div>
              <div className="d-flex justify-content-center justify-content-lg-end">
                <ButtonReuse
                  text="SEND MESSAGE"
                  border="4px"
                  borderColor="black"
                  backgroundColor="white"
                  textColor="black"
                  fontSize="14"
                  fontWeight="600"
                  width="180"
                  height="42"
                />
              </div>
            </form>
          </Col>
          <Col xl={6}>
            <CardFaq />
          </Col>
        </Row>
      </Container>
    </div>
    
  );
}

export default GetIn;
