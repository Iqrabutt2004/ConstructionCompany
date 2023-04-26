import React from 'react'
import "./MainLatest.css";
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioCardsThree from "../../assets/images/portfolioCard-3.svg";
import PortfolioCardsFour from "../../assets/images/portfolioCard-4.svg";
import PortfolioCardsFive from "../../assets/images/portfolioCard-5.svg";
import ButtonReuse from "../../components/button/button";
  
function MainLatest() {
  return (
    <section>
      <div className="">
        <Container>
          <Row>
            <div className="text-center d-flex flex-column align-items-center justify-content-center pb-4">
              <p className="latestHead">Latest Projects</p>
              <div className="line-style-2"></div>
            </div>
            <Col lg={4} className="d-flex justify-content-evenly">
              <div className="mb-5">
                <img
                  className=" img-latest mb-4"
                  src={PortfolioCardsFour}
                  alt=""
                />
                <div className="card card-main mb-5">
                  <h6
                    className="py-3"
                    style={{ fontSize: "15px", fontWeight: "500" }}
                  >
                    Project Title
                  </h6>
                  <p className=" pb-5 card-para-main">
                    nLorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    et euismod bibendum adipiscing et orci, fermentum. Cras
                    tristique viverra gravida et sit egestas.
                  </p>
                  <div className="">
                    <ButtonReuse
                      className=" btn-after hvr-pop "
                      text="VIEW PROJECT"
                      border="1px"
                      borderColor="#666666"
                      backgroundColor="white"
                      textColor="#666666"
                      fontSize="11"
                      fontWeight="800"
                      padding="1px 22px 4px 23px"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="d-flex justify-content-evenly">
              <div>
                <img
                  className="img-latest  mb-4"
                  src={PortfolioCardsThree}
                  alt=""
                />
                <div className="card card-main mb-5">
                  <h6
                    className="py-3"
                    style={{ fontSize: "15px", fontWeight: "500" }}
                  >
                    Project Title
                  </h6>
                  <p className=" pb-5 card-para-main">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    et euismod bibendum adipiscing et orci, fermentum. Cras
                    tristique viverra gravida et sit egestas.
                  </p>
                  <div className="">
                    <ButtonReuse
                      className=" btn-after hvr-pop "
                      text="VIEW PROJECT"
                      border="1px"
                      borderColor="#666666"
                      backgroundColor="white"
                      textColor="#666666"
                      fontSize="11"
                      fontWeight="800"
                      padding="1px 22px 4px 23px"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="d-flex justify-content-evenly mb-5">
              <div>
                <img
                  className=" img-latest mb-4"
                  src={PortfolioCardsFive}
                  alt=""
                />
                <div className="card card-main">
                  <h6
                    className="py-3"
                    style={{ fontSize: "15px", fontWeight: "500" }}
                  >
                    Project Title
                  </h6>
                  <p className=" pb-5 card-para-main">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    et euismod bibendum adipiscing et orci, fermentum. Cras
                    tristique viverra gravida et sit egestas.
                  </p>
                  <div className="">
                    <ButtonReuse
                      className=" btn-after hvr-pop "
                      text="VIEW PROJECT"
                      border="1px"
                      borderColor="#666666"
                      backgroundColor="white"
                      textColor="#666666"
                      fontSize="11"
                      fontWeight="800"
                      padding="1px 22px 4px 23px"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <div className="text-center d-flex flex-column align-items-center justify-content-center ">
              <ButtonReuse
                className=" btn-after hvr-pop "
                text="VIEW ALL"
                border="4px"
                borderColor="#1F1F1F"
                backgroundColor="white"
                textColor="#1F1F1F"
                fontSize="15"
                fontWeight="500"
                padding="11px 72px"
              />
            </div>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default MainLatest

