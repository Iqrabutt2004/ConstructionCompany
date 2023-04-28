import React from 'react'
import { Container, Row , Col} from "react-bootstrap";
import "./ContactStart.css";
import ButtonReuse from '../../components/button/button';
function ContactStart() {
  return (
    <div>
      <div className="shadow py-5">
        <Container>
          <div className="ContactStartFlex">
            <div className="ContactStartFlex-1">
              <div className="card-title">
                <h1 className="call-clr ">
                  Call: (541) 931-3526
                </h1>
                <p style={{fontSize:"28px" ,fontWeight:"500"}}>We Can't Wait to Make Your Ideas a Reality</p>
              </div>
            </div>
            <div className=" ContactStartFlex-2">
              <div className="py-4 ">
                <ButtonReuse
                  className=" btn-after hvr-bob"
                  text="ONLINE ESTIMATE FORM"
                  border="4px"
                  borderColor="#FFB400"
                  backgroundColor="white"
                  textColor="#FFB400"
                  fontSize="14"
                  fontWeight="600"
                  padding="10px 16px"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ContactStart
