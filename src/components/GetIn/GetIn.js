import React from "react";
import { Container } from "react-bootstrap";
import ButtonReuse from "../ReusableComponent/button/button";
import CardFaq from "../ReusableComponent/card-faq/CardFaq";
import Map from "../../assets/images/Map.svg";
import "./GetIn.css";

function GetIn() {
  return (
    <>
      <div className="service-bg-clr py-5">
        <Container>
          <div className="flex-wrap">
            <div className="flex-wrap-one pb-5">
              <h2>Get In Touch</h2>
              <div className="line-style-4"></div>
              <form className="py-5">
                <div className="input-flex-wrap ">
                  <input
                    className="text-field-name"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="text-field-name"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <textarea
                  className="text-field-message"
                  type="text"
                  placeholder="Message"
                />
                <div className="d-flex justify-content-end button-wrapper">
                  <ButtonReuse
                    text="SEND MESSAGE"
                    border="4px"
                    borderColor="black"
                    backgroundColor="#F7F7F7"
                    textColor="black"
                    fontSize="13"
                    fontWeight="600"
                    padding="1px 2rem"
                  />
                </div>
              </form>
            </div>
            <div className="flexWrap-2">
              <CardFaq />
            </div>
          </div>
        </Container>
      </div>
      <img className="img-fluid w-100 " src={Map} alt="" />
    </>
  );
}

export default GetIn;
