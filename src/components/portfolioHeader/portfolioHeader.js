import React from "react";
import PortfolioHeaderImg from "../../assets/images/PortfolioHeaderImg.png";
import "./PortfolioHeader.css";

const PortfolioHeader = () => {
  return (
    <>
      <div
        className="portfolio-container"
        style={{ backgroundImage: `url(${PortfolioHeaderImg})` }}
      >
        <div className="portfolio-banner-design">
          <h1 className="portfolio-banner-heading" data-aos="fade-up">
            Our Construction <br/> Projects
          </h1>
          <p className="portfolio-banner-text py-3" data-aos="fade-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
            <br />
            egestas pellentesque libero dolor in diam consequat ut.
          </p>
        </div>
      </div>
    </>
  );
};

export default PortfolioHeader;
