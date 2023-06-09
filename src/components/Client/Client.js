import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Clients from "../../assets/images/Clients.svg";
import ClientCard from "../ReusableComponent/ClientCard/ClientCard";
import "./Client.css";

function Client() {
  return (
    <div className="service-bg-clr">
      <section>
        <Container>
          <div className="text-center pb-5">
            <h3 className="client-text">Client Testimonials</h3>
            <div className="client-bottom-line"></div>
          </div>
          <Row className="d-flex justify-content-evenly">
            <Col xl={3} lg={12} className="client-cards">
              <ClientCard />
            </Col>
            <Col xl={3} lg={12} className="client-cards">
              <ClientCard />
            </Col>
            <Col xl={3} lg={12} className="client-cards">
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
