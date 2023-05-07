import React from 'react'
import Footer from '../ReusableComponent/footer/footer';
import "./PortfolioFooter.css";

function PortfolioFooter() {
  return (
    <>
      <div className="portfolio-footer-bg">
        <p className="portfolio-footer-text">
          Have a Project in Mind?
          <br /> Let's Get Building!
        </p>
      </div>
      <Footer/>
      
    </>
  );
}

export default PortfolioFooter
