import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioCardsOne from "../../assets/images/portfolioCard-1.svg";
import PortfolioCardsTwo from "../../assets/images/portfolioCard-2.svg";
import PortfolioCardsThree from "../../assets/images/portfolioCard-3.svg";
import PortfolioCardsFour from "../../assets/images/portfolioCard-4.svg";
import PortfolioCardsFive from "../../assets/images/portfolioCard-5.svg";
import PortfolioCardsSix from "../../assets/images/portfolioCard-6.svg";
import PortfolioCardsSeven from "../../assets/images/portfolioCard-7.svg";
import PortfolioCardsEight from "../../assets/images/portfolioCard-8.svg";
import PortfolioCardsNine from "../../assets/images/portfolioCard-9.svg";
import CardReuse from "../ReusableComponent/cardReuse/cardReuse";
import "./portfolioCards.css";

function PortfolioCards() {
  const customBorderStyle = {
    border: "1px solid #666666",
    borderRadius: "0px",
  };
  const customTextColor = "#666666";
  const customBgColor = "#F7F7F7";
  return (
    <div className="service-bg-clr">
      <Container className="py-5">
        <Row className="mb-5 d-flex justify-content-evenly">
          <Col lg={3} className="mb-5 ">
            <div>
              <img
                className="img-fluid mb-4"
                style={{ width: "100%" }}
                src={PortfolioCardsOne}
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
          <Col lg={3} className="mb-5 ">
            <div>
              <img
                className="img-fluid mb-4"
                style={{ width: "100%" }}
                src={PortfolioCardsTwo}
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
          <Col lg={3} className="mb-5 ">
            <div>
              <img
                className="img-fluid mb-4"
                style={{ width: "100%" }}
                src={PortfolioCardsThree}
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
        <Row className="mb-5  d-flex justify-content-evenly">
          <Col lg={3} className="mb-5 ">
            <div>
              <img
                className="img-fluid mb-4"
                style={{ width: "100%" }}
                src={PortfolioCardsFour}
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
          <Col lg={3} className="mb-5 ">
            <div>
              <img
                className="img-fluid mb-4"
                style={{ width: "100%" }}
                src={PortfolioCardsFive}
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
          <Col lg={3} className="mb-5 ">
            <div>
              <img
                className="img-fluid mb-4"
                style={{ width: "100%" }}
                src={PortfolioCardsSix}
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
        <Row className="mb-5  d-flex justify-content-evenly">
          <Col lg={3} className="mb-5 ">
            <div>
              <img
                className="img-fluid mb-4"
                style={{ width: "100%" }}
                src={PortfolioCardsSeven}
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
          <Col lg={3} className="mb-5 ">
            <div>
              <img
                className="img-fluid mb-4"
                style={{ width: "100%" }}
                src={PortfolioCardsEight}
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
          <Col lg={3} className="mb-5 ">
            <div>
              <img
                className="img-fluid mb-4"
                style={{ width: "100%" }}
                src={PortfolioCardsNine}
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
      </Container>
    </div>
  );
}

export default PortfolioCards;
