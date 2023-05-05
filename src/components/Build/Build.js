import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonReuse from "../ReusableComponent/button/button";
import CardFaq from "../ReusableComponent/card-faq/CardFaq";
import "./Build.css";

function Build() {
  return (
    <div className="py-5 service-bg-clr">
      <div className="py-5">
        <Container>
          <Row>
            <Col lg={4} className="build-card pb-5">
              <h2>
                Let's Build <br /> Something <br /> Together
              </h2>
              <div className="line-bottom"></div>
              <p className="text-muted py-4">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Sapien, dignissim tristique <br /> tellus sed faucibus nullam.
                Tincidunt mauris
                <br />
                ut quam sed mauris proin feugiat.
              </p>
              <ButtonReuse
                className="hvr-bob"
                text="GET IN TOUCH"
                border="3px"
                borderColor="#FFB400"
                backgroundColor="#F7F7F7"
                textColor="#FFB400"
                fontSize="14"
                fontWeight="600"
                padding="4px 2rem"
              />
            </Col>
            <Col lg={8}>
              <CardFaq />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Build;
