import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardReuse from "../ReusableComponent/cardReuse/cardReuse";
import ServiceOne from "../../assets/images/service-1.svg";
import ServiceTwo from "../../assets/images/service-2.svg";
import ServiceThree from "../../assets/images/service-3.svg";
import ButtonReuse from "../ReusableComponent/button/button";
import "./relatedProject.css";

const RelatedProject = () => {
  const customBorderStyle = {
    border: "1px solid #666666",
    borderRadius: "0px",
  };
  const customTextColor = "#666666";
  const customBgColor = "#F7F7F7";
  return (
    <div className="service-bg-clr">
      <section>
        <Container>
          <div className="text-center pb-5">
            <h3 className="related-project-heading">Related Projects</h3>
            <div className="latest-bottom-line mx-auto"></div>
          </div>
          <Row className="d-flex justify-content-evenly">
            <Col lg={3} className="mb-5">
                <img
                  className="img-fluid mb-4"
                  style={{ width: "100%" }}
                  src={ServiceOne}
                  alt="service-img-one"
                />
                <CardReuse
                  title="Service Title"
                  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. "
                  borderStyle={customBorderStyle}
                  textColor={customTextColor}
                  backgroundColor={customBgColor}
                />
            </Col>
            <Col lg={3} className="mb-5">
                <img
                  className="img-fluid mb-4"
                  style={{ width: "100%" }}
                  src={ServiceTwo}
                  alt="service-img-two"
                />
                <CardReuse
                  title="Service Title"
                  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. "
                  borderStyle={customBorderStyle}
                  textColor={customTextColor}
                  backgroundColor={customBgColor}
                />
            </Col>
            <Col lg={3} className="mb-5">
                <img
                  className="img-fluid mb-4"
                  style={{ width: "100%" }}
                  src={ServiceThree}
                  alt="service-img-three"
                />
                <CardReuse
                  title="Service Title"
                  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. "
                  borderStyle={customBorderStyle}
                  textColor={customTextColor}
                  backgroundColor={customBgColor}
                />
            </Col>
          </Row>
          <div className="button-project">
            <ButtonReuse
              className="hvr-pop"
              text="VIEW ALL"
              border="4px"
              borderColor="black"
              backgroundColor="#F7F7F7"
              textColor="black"
              fontSize="14"
              fontWeight="500"
              padding="6px 3.3rem"
            />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default RelatedProject;
