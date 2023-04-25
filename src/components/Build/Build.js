import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ButtonReuse from '../../components/button/button';
import CardFaq from '../../components/card-faq/CardFaq';
function Build() {
  return (
    <div className=" py-3 service-bgClr">
      <div className="py-5">
        <Container>
          <Row className="flex-wrap">
            <Col lg={4} className="pb-5">
              <h2>
                Let's Build <br /> Something <br /> Together
              </h2>
              <div className="line-style-4"></div>
              <p className="text-muted py-4">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Sapien, dignissim tristique <br /> tellus sed faucibus nullam.
                Tincidunt mauris
                <br />
                ut quam sed mauris proin feugiat.{" "}
              </p>
              <div className="">
                <ButtonReuse
                  text="GET IN TOUCH"
                  border="3px"
                  borderColor="#FFB400"
                  backgroundColor="#F7F7F7"
                  textColor="#FFB400"
                  fontSize="14"
                  fontWeight="600"
                  width="180"
                  height="42"
                />
              </div>
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

export default Build
