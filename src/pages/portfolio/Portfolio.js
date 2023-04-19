import React from 'react'
import PortfolioHeader from '../../components/portfolioHeader/portfolioHeader'
import PortfolioCards from '../../components/portfolioCards/portfolioCards'
import Footer from "../../components/footer/footer";
function Portfolio() {
  return (
    <div>
      <PortfolioHeader/>
      <PortfolioCards/>
      <Footer/>
    </div>
  )
}

export default Portfolio
