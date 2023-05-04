import React from 'react'
import Star from "../../../assets/images/star.svg";
import "./ClientCard.css";

function ClientCard() {
  return (
      <div className="card card-client mb-5">
        <div className="card-title d-flex justify-content-center pt-4 ">
          <img
            className="img-fluid px-1 "
            src={Star}
            alt=""
          />
          <img
            className="img-fluid px-1 "
            src={Star}
            alt=""
          />
          <img
            className="img-fluid px-1"
            src={Star}
            alt=""
          />
          <img
            className="img-fluid px-1"
            src={Star}
            alt=""
          />
          <img
            className="img-fluid px-1"
            src={Star}
            alt=""
          />
        </div>
        <div className="card-body">
          <p className=" testimonial-para py-3 px-2 d-flex ">
            “Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
            <br /> Sapien, dignissim tristique tellus
            <br /> sed faucibus nullam.”
          </p>
          <h6 className="pb-3 px-2 john-text d-flex ">
            John Smith
          </h6>
        </div>
      </div>
  );
}

export default ClientCard
