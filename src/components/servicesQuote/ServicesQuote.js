import React from "react";
import { Container } from "react-bootstrap";
import ButtonReuse from "../ReusableComponent/button/button";
import "./ServicesQuote.css";

function ServicesQuote() {
  return (
    <>
      <div className="shadow py-4">
        <Container>
          <div className="services-flex">
            <h2 className="about-project-head ">
              Get a Quote For Your Project
            </h2>
            <div className="services-button-padding">
              <ButtonReuse
                className="hvr-wobble-horizontal"
                text="FREE QUOTE"
                border="4px"
                borderColor="#FFB400"
                backgroundColor="white"
                textColor="#FFB400"
                fontSize="14"
                fontWeight="600"
                padding="13px 50px"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ServicesQuote;
