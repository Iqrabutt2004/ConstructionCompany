import React from 'react'
import PortfolioHeader from '../../components/portfolioHeader/portfolioHeader'
import PortfolioCards from '../../components/portfolioCards/portfolioCards'
import PortfolioFooter from '../../components/PortfolioFooter/PortfolioFooter';
import "./Portfolio.css";

function Portfolio() {
  return (
    <React.Fragment>
      <PortfolioHeader />
      <PortfolioCards />
      <PortfolioFooter/>
    </React.Fragment>
  );
}

export default Portfolio
