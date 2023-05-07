import React from "react";
import { Container } from "react-bootstrap";
import ButtonReuse from "../ReusableComponent/button/button";
import "./ContactStart.css";

function ContactStart() {
  return (
    <>
      <div className="shadow py-4">
        <Container>
          <div className="contact-estimation-flex">
            <div>
              <p className="call-clr">Call: (541) 931-3526</p>
              <p className="ideas-text">
                We Can't Wait to Make Your Ideas a Reality
              </p>
            </div>
            <div className="d-flex align-items-center">
              <ButtonReuse
                className="hvr-wobble-horizontal"
                text="ONLINE ESTIMATE FORM"
                border="4px"
                borderColor="#FFB400"
                backgroundColor="white"
                textColor="#FFB400"
                fontSize="14"
                fontWeight="600"
                padding="13px 2rem"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ContactStart;
