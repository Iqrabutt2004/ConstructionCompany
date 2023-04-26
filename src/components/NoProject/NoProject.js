import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./NoProject.css";
import TheBestReuse from "../../components/TheBestReuse/TheBestReuse";
import ButtonReuse from "../../components/button/button";
import ArrowOne from "../../assets/images/arrow-1.svg"
function NoProject() {
  return (
    <div>
      <div className="noFlex">
        <div className="p-0 noFlex-1">
          <div className="bg-clr-project padding-parent  ">
            <div className="px-5">
              <div className="d-flex py-2 margin-div">
                <img className="img-fluid" src={ArrowOne} alt="" />
                <img className="img-fluid" src={ArrowOne} alt="" />
                <h6 className="new-style mx- 4">Eco Friendly Construction</h6>
              </div>
              <p className="margin-para">
                Donec sollicitudin molestie malesuada. Praesent
                sapien massa, convallis a pellentesque nec, 
                egestas non nisi.
              </p>
            </div>
            <div className="px-5">
              <div className="d-flex py-2 margin-div">
                <img className="img-fluid" src={ArrowOne} alt="" />
                <img className="img-fluid" src={ArrowOne} alt="" />
                <h6 className="new-style mx- 4">
                  The Newest Technology Repairs
                </h6>
              </div>
              <p className="margin-para">
                Donec sollicitudin molestie malesuada. Praesent
              sapien massa, convallis a pellentesque nec,
                egestas non nisi.
              </p>
            </div>
            <div className="px-5">
              <div className="d-flex py-2 margin-div">
                <img className="img-fluid" src={ArrowOne} alt="" />
                <img className="img-fluid" src={ArrowOne} alt="" />
                <h6 className="new-style mx- 4">
                  High Quality Construction Management
                </h6>
              </div>
              <p className="margin-para">
                Donec sollicitudin molestie malesuada. Praesent
                 sapien massa, convallis a pellentesque nec, 
                egestas non nisi.
              </p>
            </div>
          </div>
        </div>
        <div className="p-0 noFlex-2">
          <div className="TooBig-style">
            <div className="TooBig-style-2">
              <h1>No Project Too Big Or Too Small</h1>
              <div className="line-style-4 "></div>
              <div className="noFlex">
                <div className="noFlex-3">
                  <p className="text-muted py-4">
                    Lectus erat, consectetur eu sapien eget <br /> rhoncus
                    consectetur sem. Proin cursus, dolor <br /> a mollis
                    consectetur, risus dolor fermentum <br /> massa, a commodo
                    elit dui sit amet risus. <br /> Maecenas ornare nisl a
                    tortor ultrices <br /> bibendum. Nulla fermentum, metus quis{" "}
                    <br />
                    sodales tristique, augue mauris molestie <br /> augue, non
                    feugiat ligula neque nec felis nec felis
                  </p>
                </div>
                <div className="noFlex-4">
                  <p className="text-muted py-4">
                    Lorem ipsum dolor sit consectetur adipiscing elit.
                    <br /> Nullam lectus erat, consectetur eu sapien eget
                    <br />
                    rhoncus consectetur sem.
                    <br /> Proin cursus, dolor a mollis consectetur, risus
                    <br />
                    dolor fermentum massa, a commodo elit dui sit
                    <br /> amet risus. Maecenas ornare nisl a tortor ultrices
                    <br />
                    bibendum. Nulla fermentum, metus quis sodales
                    <br /> tristique,
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row-bg justify-content-around d-flex">
            <div>
              <h2 className="text-white">Get Free Consultation</h2>
            </div>
            <div>
              <ButtonReuse
                className=" btn-after hvr-bob"
                text="ONLINE ESTIMATE FORM"
                border="4px" // Set border width to 1px
                borderColor="#FFB400"
                backgroundColor="#2A2A2A"
                textColor="#FFB400"
                fontSize="14"
                fontWeight="500"
                width="202"
                height="42"
              />
            </div>
          </div>
          {/* <Row className="row-bg py-4">
            <Col lg={6}>
              <h2 className='text-white'>Get Free Consultation</h2>
            </Col>
          </Row> */}
        </div>
      </div>
    </div>
  );
}

export default NoProject
