import React from 'react'
import { Container, Row , Col} from "react-bootstrap";
import "./ContactStart.css";
import ButtonReuse from '../../components/button/button';
function ContactStart() {
  return (
    <div>
      <div className="shadow py-4">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="card-title">
                <h1 className="call-clr about-projectHead">
                  Call: (541) 931-3526
                </h1>
                <h3>We Can't Wait to Make Your Ideas a Reality</h3>
              </div>
            </Col>
            <Col lg={6} className="d-flex align-items-center">
              <div className="card-body d-flex justify-content-center justify-content-lg-end">
                <ButtonReuse
                  className=" btn-after hvr-shrink hvr-shutter-out-vertical"
                  text="ONLINE ESTIMATE FORM"
                  border="3px" // Set border width to 1px
                  borderColor="#FFB400"
                  backgroundColor="white"
                  textColor="#FFB400"
                  fontSize="14"
                  fontWeight="600"
                  width="230"
                  height="65"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ContactStart
