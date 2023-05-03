import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonReuse from "../../components/button/button";
import CardFaq from "../card-faq/CardFaq";
import "./faq.css";

function FAQ() {
  return (
    <div className="service-bg-clr">
      <Container className="py-5">
        <Row>
          <Col lg={4} className="pb-4">
            <h1>F.A.Q.</h1>
            <div className="line-style-4"></div>
            <p className="text-muted py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat.{" "}
            </p>
            <ButtonReuse
              className=" hvr-bob"
              text="ASK A QUESTION"
              border="3px"
              borderColor="#FFB400"
              backgroundColor="#F7F7F7"
              textColor="#FFB400"
              fontSize="14"
              fontWeight="500"
              width="180"
              height="42"
            />
          </Col>
          <Col lg={8}>
            <CardFaq />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FAQ;
