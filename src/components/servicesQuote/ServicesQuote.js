import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./ServicesQuote.css";
import ButtonReuse from '../../components/button/button';
function ServicesQuote() {
  return (
    <div>
      <div className="shadow py-4">
        <Container>
          <div className="ServicesFlex">
            <div className="ServicesFlex-1">
              <div className="">
                <h2 className="about-projectHead ">
                  Get a Quote For Your Project
                </h2>
              </div>
            </div>
            <div className="ServicesFlex-2">
                <ButtonReuse
                  className=" btn-after hvr-bob"
                  text="FREE QUOTE"
                  border="4px" // Set border width to 1px
                  borderColor="#FFB400"
                  backgroundColor="white"
                  textColor="#FFB400"
                  fontSize="14"
                  fontWeight="600"
                  width="230"
                  height="65"
                />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ServicesQuote
