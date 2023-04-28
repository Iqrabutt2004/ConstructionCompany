import React from "react";
import LatestCardOne from "../../assets/images/LatestCard-1.svg";
import LatestCardTwo from "../../assets/images/LatestCard-2.svg";
import LatestCardThree from "../../assets/images/LatestCard-3.svg";
import { Container, Row, Col } from "react-bootstrap";
import CardReuse from "../../components/cardReuse/cardReuse"
import ButtonReuse from "../../components/button/button";
import "./LatestProject.css";
const LatestProject = () => {
  const customBorderStyle = {
    border: "1px solid #666666",
    borderRadius: "0px",
  };
    const customTextColor = "#666666";
    const customBgColor = "#F7F7F7";
  return (
    <div className="service-bgClr">
      <Container className="py-5 ">
        <div className="text-center pb-5">
          <h3 className="latest-heading">Latest Project</h3>
          <div className="line-style-2 mx-auto"></div>
        </div>
        <Row className="d-flex justify-content-evenly">
          <Col lg={3} className="mb-5">
            <div>
              <img
                className="img-fluid mb-4"
                style={{ width: "100%" }}
                src={LatestCardOne}
                alt=""
              />
              <CardReuse
                title="Service Title"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. "
                borderStyle={customBorderStyle}
                textColor={customTextColor}
                backgroundColor={customBgColor}
              />
            </div>
          </Col>
          <Col lg={3} className="mb-5">
            <div>
              <img
                className="img-fluid mb-4"
                style={{ width: "100%" }}
                src={LatestCardTwo}
                alt=""
              />
              <CardReuse
                title="Service Title"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. "
                borderStyle={customBorderStyle}
                textColor={customTextColor}
                backgroundColor={customBgColor}
              />
            </div>
          </Col>
          <Col lg={3} className="mb-5">
            <div>
              <img
                className="img-fluid mb-4"
                style={{ width: "100%" }}
                src={LatestCardThree}
                alt=""
              />
              <CardReuse
                title="Service Title"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. "
                borderStyle={customBorderStyle}
                textColor={customTextColor}
                backgroundColor={customBgColor}
              />
            </div>
          </Col>
        </Row>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ButtonReuse
            className=" btn-after hvr-bob"
            text="VIEW ALL"
            border="4px"
            borderColor="black"
            backgroundColor="white"
            textColor="black"
            fontSize="14"
            fontWeight="500"
            padding="8px 3.5rem"
          />
        </div>
      </Container>
    </div>
  );
};

export default LatestProject;
