import React from "react";
import PortfolioHeaderImg from "../../assets/images/PortfolioHeaderImg.png";
import "./PortfolioHeader.css";

const PortfolioHeader = () => {
  return (
    <div>
      <div
        className="portfolio-container"
        style={{ backgroundImage: `url(${PortfolioHeaderImg})` }}
      >
        <div className="portfolio-style">
          <h1 className="heading-reuse" data-aos="fade-up">
            Our Construction
             Projects
          </h1>
          <p className="heading-reuse-text" data-aos="fade-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
            <br />
            egestas pellentesque libero dolor in diam consequat ut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;
