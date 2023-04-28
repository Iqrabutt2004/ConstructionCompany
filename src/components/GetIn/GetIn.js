import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./GetIn.css";
import ButtonReuse from "../../components/button/button";
import CardFaq from "../card-faq/CardFaq";

function GetIn() {
  return (
    <div className="service-bgClr py-5">
      <Container>
        <div className="flex-wrap">
          <div className="flexWrap-1 pb-5">
            <h2>Get In Touch</h2>
            <div className="line-style-4"></div>
            <form className="py-5">
              <div className="input-flexWrapper ">
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

              <div className="d-flex justify-content-end  button-wrapper ">
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
  );
}

export default GetIn;
