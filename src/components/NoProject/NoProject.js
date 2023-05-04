import React from "react";
import "./NoProject.css";
import ButtonReuse from "../ReusableComponent/button/button";
import ArrowOne from "../../assets/images/arrow-1.svg";

function NoProject() {
  return (
    <div>
      <div className="noFlex">
        <div className="p-0 noFlex-1">
          <div className="bg-clr-project padding-parent  ">
            <div className="service-quality">
              <div className="d-flex py-2 margin-div">
                <img className="img-fluid" src={ArrowOne} alt="" />
                <img className="img-fluid" src={ArrowOne} alt="" />
                <h6 className="new-style mx- 4">Eco Friendly Construction</h6>
              </div>
              <p className="margin-para">
                Donec sollicitudin molestie malesuada. Praesent sapien massa,
                convallis a pellentesque nec, egestas non nisi.
              </p>
            </div>
            <div className="service-quality">
              <div className="d-flex py-2 margin-div">
                <img className="img-fluid" src={ArrowOne} alt="" />
                <img className="img-fluid" src={ArrowOne} alt="" />
                <h6 className="new-style mx- 4">
                  The Newest Technology Repairs
                </h6>
              </div>
              <p className="margin-para">
                Donec sollicitudin molestie malesuada. Praesent sapien massa,
                convallis a pellentesque nec, egestas non nisi.
              </p>
            </div>
            <div className="service-quality">
              <div className="d-flex py-2 margin-div">
                <img className="img-fluid" src={ArrowOne} alt="" />
                <img className="img-fluid" src={ArrowOne} alt="" />
                <h6 className="new-style mx- 4">
                  High Quality Construction Management
                </h6>
              </div>
              <p className="margin-para">
                Donec sollicitudin molestie malesuada. Praesent sapien massa,
                convallis a pellentesque nec, egestas non nisi.
              </p>
            </div>
          </div>
        </div>
        <div className="p-0 noFlex-2">
          <div className="too-big-style">
            <div className="too-big-style-two">
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
          <div className="row-bg">
            <div className="pb-4">
              <h2 className="text-white text-left">Get Free Consultation</h2>
            </div>
            <div className="button-right">
              <ButtonReuse
                className="  hvr-bob"
                text="ONLINE ESTIMATE FORM"
                border="4px" 
                borderColor="#FFB400"
                backgroundColor="#2A2A2A"
                textColor="#FFB400"
                fontSize="14"
                fontWeight="500"
                padding="13px 1.7rem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoProject;
