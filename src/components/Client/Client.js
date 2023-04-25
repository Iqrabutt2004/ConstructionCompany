import React from "react";
import { Container, Row ,Col } from "react-bootstrap";
import Clients from "../../assets/images/Clients.svg";
import ClientCard from "../../components/ClientCard/ClientCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Client.css";
function Client() {
  return (
    
      <div className="service-bgClr">
        <section>
        <Container>
          <div className="text-center pb-5">
            <h3 className="clientText">Client Testimonials</h3>
            <div className="line-style-5"></div>
          </div>
          <Row>
            <Col lg={4}>
              <ClientCard />
            </Col>
            <Col lg={4}>
              <ClientCard />
            </Col>
            <Col lg={4}>
              <ClientCard />
            </Col>
          </Row>
          <div className="py-5 d-flex justify-content-center">
            <img className="img-fluid " src={Clients} alt="" />
          </div>
        </Container>
        </section>
      </div>
  );
}

export default Client;
