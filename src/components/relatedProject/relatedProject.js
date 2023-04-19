import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./relatedProject.css";
import CardReuse from "../../components/cardReuse/cardReuse";
import ServiceOne from "../../assets/images/service-1.svg";
import ServiceTwo from "../../assets/images/service-2.svg";
import ServiceThree from "../../assets/images/service-3.svg";
import ButtonReuse from "../button/button";

const RelatedProject = () => {
  const customBorderStyle = {
    border: "1px solid #666666",
    borderRadius: "0px",
  };
  const customTextColor = "gray";
  return (
    <div className="service-bgClr">
      <Container className="py-5 ">
        <div className="text-center">
          <h3>Related Project</h3>
          <div className="line-style-2 mx-auto"></div>
        </div>
        <Row className="">
          <Col lg={4} className="mb-5">
            <div>
              <img
                className="img-fluid mb-4"
                style={{ width: "100%" }}
                src={ServiceOne}
                alt=""
              />
              <CardReuse
                title="Service Title"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. "
                borderStyle={customBorderStyle}
                textColor={customTextColor}
              />
            </div>
          </Col>
          <Col lg={4} className="mb-5">
            <div>
              <img
                className="img-fluid mb-4"
                style={{ width: "100%" }}
                src={ServiceTwo}
                alt=""
              />
              <CardReuse
                title="Service Title"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. "
                borderStyle={customBorderStyle}
                textColor={customTextColor}
              />
            </div>
          </Col>
          <Col lg={4} className="mb-5">
            <div>
              <img
                className="img-fluid mb-4"
                style={{ width: "100%" }}
                src={ServiceThree}
                alt=""
              />
              <CardReuse
                title="Service Title"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. "
                borderStyle={customBorderStyle}
                textColor={customTextColor}
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
            text="VIEW ALL"
            border="4px" 
            borderColor="black"
            backgroundColor="white"
            textColor="black"
            fontSize="14"
            fontWeight="500"
            width="180"
            height="42"
          />
        </div>
      </Container>
    </div>
  );
};

export default RelatedProject;
