import React from "react";
import MainProjectImage from "../../assets/images/MainProject.svg";
import ButtonReuse from "../ReusableComponent/button/button";
import "./MainProject.css";

function MainProject() {
  return (
    <>
      <div className="no-project-flex">
        <div className="p-0 no-project-flex-one">
          <img
            className="img-fluid main-img-set"
            src={MainProjectImage}
            alt=""
          />
        </div>
        <div className="p-0 no-project-flex-two">
          <div className="too-big-style">
            <div className="too-big-style-two">
              <h1>No Project Too Big Or Too Small</h1>
              <div className="line-style-4 "></div>
              <div className="no-project-flex">
                <div className="no-project-flex-three">
                  <p className="main-para">
                    Lorem ipsum dolor sit amet, consectetur
                    <br /> adipiscing elit. Sapien, dignissim tristique
                    <br /> tellus sed faucibus nullam. Tincidunt mauris
                    <br /> ut quam sed mauris proin feugiat.
                    <br /> Scelerisque lorem posuere iaculis nunc amet
                    <br />
                    phasellus.
                    <br /> <br /> Lorem ipsum dolor sit amet, consectetur
                    <br />
                    adipiscing elit. Sapien, dignissim tristique <br />
                    tellus sed faucibus nullam.
                  </p>
                </div>
                <div className="no-project-flex-four">
                  <p className="main-para">
                    Lorem ipsum dolor sit amet, consectetur
                    <br /> adipiscing elit. Sapien, dignissim tristique tellus
                    <br />
                    sed faucibus nullam. Tincidunt mauris ut quam
                    <br /> sed mauris proin feugiat. Scelerisque lorem <br />
                    posuere iaculis nunc amet phasellus.
                  </p>
                  <div>
                    <ButtonReuse
                      className="hvr-bob"
                      text="LEARN MORE"
                      border="4px"
                      borderColor="#1F1F1F"
                      backgroundColor="#F7F7F7"
                      textColor="#1F1F1F"
                      fontSize="14"
                      fontWeight="600"
                      padding="7px 2.5rem"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
}

export default MainProject;
