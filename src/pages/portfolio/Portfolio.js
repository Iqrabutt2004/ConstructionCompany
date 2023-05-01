import React from 'react'
import PortfolioHeader from '../../components/portfolioHeader/portfolioHeader'
import PortfolioCards from '../../components/portfolioCards/portfolioCards'
import Footer from "../../components/footer/footer";
import "./Portfolio.css";
function Portfolio() {
  return (
    <div>
      <PortfolioHeader />
      <PortfolioCards />
      <div className="portfolioFooter-bg">
        <p className="portfolioFooter-text">
          Have a Project in Mind?<br/> Let's Get Building!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio
