import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./TheBest.css";
import TheBestReuse from '../../components/TheBestReuse/TheBestReuse';
import ButtonReuse from '../../components/button/button';
import TheBestpic from "../../assets/images/TheBest-pic.svg";
function TheBest() {
  return (
    <div>
      <section>
        <Row>
          <Col xl={4} lg={12} className="background-clr py-4">
            <div className="width-manage">
              <div>
                <h3 className="py-3 px-2">Only the Best</h3>
                <TheBestReuse title="Eco Friendly Construction" />
                <TheBestReuse title="The Newest Technology Repairs" />
                <TheBestReuse title="High Quality Construction Management" />
              </div>
              <div className="d-flex justify-content-end py-4">
                <ButtonReuse
                  text="FREE QUOTE"
                  border="5px"
                  borderColor="#FFB400"
                  backgroundColor="#F7F7F7"
                  textColor="#FFB400"
                  fontSize="14"
                  fontWeight="600"
                  width="230"
                  height="65"
                />
              </div>
            </div>
          </Col>
          <Col xl={8} lg={12} className="px-0">
            <img className="img-fluid bestPic" src={TheBestpic} alt="" />
            <div className="mx-0 BestFlex">
              <div className="BestFlex-1 best-orange">
                <h1>12</h1>
                <p className="p-style">YEARS ESTABLISHED</p>
              </div>
              <div className=" BestFlex-2 best-black">
                <h1>250</h1>
                <p className="p-style">COMPLETED PROJECTS</p>
              </div>
            </div>
            <Row className="py-4 background-clr mx-0 ">
              <div className="d-flex justify-content-around">
                <div className="flex">
                  <h3>24</h3>
                  <p className="p-style">FIELD WORKERS</p>
                </div>
                <div className="flex">
                  <h3>18</h3>
                  <p className="p-style">OFFICE STAFF</p>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </section>
      <section>
        <div className="py-5">
          <h2 className="text-center h2-style">
            “Suspendisse neque erat, imperdiet <br /> ac non, sollicitudin
            accumsan lacus.
            <br /> Vestibulum ac ex rutrum,
            <br /> pellentesque purus et, lacinia mi.
            <br /> Nullam maximus lectus libero.”
          </h2>
          <p className="text-muted text-font text-center">JOHN SMITH – CEO</p>
        </div>
      </section>
    </div>
  );
}

export default TheBest
