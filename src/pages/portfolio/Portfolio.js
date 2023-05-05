import React from 'react'
import PortfolioHeader from '../../components/portfolioHeader/portfolioHeader'
import PortfolioCards from '../../components/portfolioCards/portfolioCards'
import Footer from "../../components/ReusableComponent/footer/footer";
import "./Portfolio.css";

function Portfolio() {
  return (
    <React.Fragment>
      <PortfolioHeader />
      <PortfolioCards />
      <div className="portfolio-footer-bg">
        <p className="portfolio-footer-text">
          Have a Project in Mind?
          <br /> Let's Get Building!
        </p>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Portfolio
