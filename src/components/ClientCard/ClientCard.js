import React from 'react'
import Star from "../../assets/images/star.svg";
import "./ClientCard.css";
import { Container } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ClientCard() {
  return (
    <Container>
      <div className="card card-client mb-3">
        <div className="card-title d-flex justify-content-center pt-4 ">
          <img
            className="img-fluid px-1 "
            style={{ width: "32px" }}
            src={Star}
            alt=""
          />
          <img
            className="img-fluid px-1 "
            style={{ width: "32px" }}
            src={Star}
            alt=""
          />
          <img
            className="img-fluid px-1"
            style={{ width: "32px" }}
            src={Star}
            alt=""
          />
          <img
            className="img-fluid px-1"
            style={{ width: "32px" }}
            src={Star}
            alt=""
          />
          <img
            className="img-fluid px-1"
            style={{ width: "32px" }}
            src={Star}
            alt=""
          />
        </div>
        <div className="card-body">
          <p className=" text-muted py-3 px-2 d-flex ">
            “Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
            <br /> Sapien, dignissim tristique tellus
            <br /> sed faucibus nullam.”
          </p>
          <h6 className="pb-3 px-2 d-flex ">
            John Smith
          </h6>
        </div>
      </div>
    </Container>
  );
}

export default ClientCard
