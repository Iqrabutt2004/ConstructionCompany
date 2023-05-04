import React from "react";
import { Row } from "react-bootstrap";
import TheBestReuse from "../ReusableComponent/TheBestReuse/TheBestReuse";
import ButtonReuse from "../ReusableComponent/button/button";
import TheBestpic from "../../assets/images/TheBest-pic.svg";
import "./TheBest.css";

function TheBest() {
  return (
    <>
      <section>
        <div className="the-best-flex">
          <div className="the-best-flex-one background-clr py-4">
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
                  padding="12px 3.5rem"
                />
              </div>
            </div>
          </div>
          <div className="the-best-flex-two px-0">
            <img className="best-pic" src={TheBestpic} alt="" />
            <div className="mx-0 best-flex">
              <div className="best-flex-one">
                <h1>12</h1>
                <p className="p-style">YEARS ESTABLISHED</p>
              </div>
              <div className="best-flex-two">
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
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-center h2-style">
          “Suspendisse neque erat, imperdiet <br /> ac non, sollicitudin
          accumsan lacus.
          <br /> Vestibulum ac ex rutrum,
          <br /> pellentesque purus et, lacinia mi.
          <br /> Nullam maximus lectus libero.”
        </h2>
        <p className="text-muted text-font text-center">JOHN SMITH - CEO</p>
      </section>
    </>
  );
}

export default TheBest;
