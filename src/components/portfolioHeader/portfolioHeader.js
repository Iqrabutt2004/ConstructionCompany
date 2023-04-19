import React, { useEffect } from "react";
import "./PortfolioHeader.css";
import AOS from "aos";
import "aos/dist/aos.css";
import PortfolioHeaderImg from "../../assets/images/PortfolioHeaderImg.png";

const PortfolioHeader = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 50 });
  }, []);

  return (
    <div>
      <div
        className="portfolio-container"
        style={{ backgroundImage: `url(${PortfolioHeaderImg})` }}
      >
        <div className="lineStyle-portfolio"></div>
        <div className=" portfolio-style">
          <h1 className="text-white" data-aos="fade-up">
            Our Construction
            <br /> Projects
          </h1>
          <p className="text-white" data-aos="fade-left">
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
