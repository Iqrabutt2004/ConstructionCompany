import React from "react";
import MainProjectImage from "../../assets/images/MainProject.svg";
import ButtonReuse from "../../components/button/button";
import "./MainProject.css";
function MainProject() {
  return (
    <div>
      <div className="flexMain">
        <div className="p-0 flexMain-1">
          <img
            
            className="img-fluid MainImgSet"
            src={MainProjectImage}
            alt=""
          />
        </div>
        <div className="p-0 flexMain-2">
          <div className="TooBig-style">
            <div className="TooBig-style-2">
              <h1>No Project Too Big Or Too Small</h1>
              <div className="line-style-4 "></div>
              <div className="flexMain">
                <div className="flexMain-3">
                  <p className="mainPara ">
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
                <div className="flexMain-4">
                  <p className="mainPara  ">
                    Lorem ipsum dolor sit amet, consectetur
                    <br /> adipiscing elit. Sapien, dignissim tristique tellus
                    <br />
                    sed faucibus nullam. Tincidunt mauris ut quam
                    <br /> sed mauris proin feugiat. Scelerisque lorem <br />
                    posuere iaculis nunc amet phasellus.
                  </p>
                  <div>
                    <ButtonReuse
                      className=" btn-after hvr-bob"
                      text="LEARN MORE"
                      border="4px" // Set border width to 1px
                      borderColor="#1F1F1F"
                      backgroundColor="#F7F7F7"
                      textColor="#1F1F1F"
                      fontSize="14"
                      fontWeight="600"
                      width="210"
                      height="54"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-0 flexMain">
            <div className="best-orange flexMain-5">
              <h1>12</h1>
              <p className="p-style">YEARS ESTABLISHED</p>
            </div>
            <div className="best-black flexMain-6">
              <h1>250</h1>
              <p className="p-style">COMPLETED PROJECTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProject;
