import React from "react";
import { Row, Col } from "react-bootstrap";
import MainProjectImage from "../../assets/images/MainProject.svg";
// import ButtonReuse from "../../components/button/ButtonReuse";

function MainProject() {
  return (
    <div>
      <Row>
        <Col lg={4} className="p-0">
          <img className="img-fluid img-blog" src={MainProjectImage} alt="" />
        </Col>
        <Col lg={8} className="p-0">
          <div className="TooBig-style">
            <div className="TooBig-style-2">
              <h1>No Project Too Big Or Too Small</h1>
              <div className="line-style-4 "></div>
              <Row>
                <Col lg={6}>
                  <p className="text-muted py-5">
                    Lorem ipsum dolor sit amet, consectetur
                    <br /> adipiscing elit. Sapien, dignissim tristique
                    <br /> tellus sed faucibus nullam. Tincidunt mauris
                    <br /> ut quam sed mauris proin feugiat.
                    <br /> Scelerisque lorem posuere iaculis nunc amet
                    <br />
                    phasellus.
                    <br /> <br /> Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sapien, dignissim tristique tellus sed
                    faucibus nullam.
                  </p>
                </Col>
                <Col lg={6}>
                  <p className="text-muted py-5">
                    Lorem ipsum dolor sit amet, consectetur
                    <br /> adipiscing elit. Sapien, dignissim tristique tellus
                    <br />
                    sed faucibus nullam. Tincidunt mauris ut quam
                    <br /> sed mauris proin feugiat. Scelerisque lorem <br />
                    posuere iaculis nunc amet phasellus.
                  </p>
                  <div>
                    {/* <ButtonReuse
                      text="ONLINE ESTIMATE FORM"
                      border="4px" // Set border width to 1px
                      borderColor="#FFB400"
                      backgroundColor="#2A2A2A"
                      textColor="#FFB400"
                      fontSize="14"
                      fontWeight="500"
                      width="202"
                      height="42"
                    /> */}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <Row className="mx-0">
            <Col lg={6} className="best-orange">
              <h1>12</h1>
              <p className="p-style">YEARS ESTABLISHED</p>
            </Col>
            <Col lg={6} className="best-black">
              <h1>250</h1>
              <p className="p-style">COMPLETED PROJECTS</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default MainProject;
