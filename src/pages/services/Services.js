import React from 'react'
import ServicesHeader from "../../components/ServicesHeader/ServicesHeader";
import ServicesQuote from '../../components/servicesQuote/ServicesQuote'
import CustomProject from '../../components/CustomProject/CustomProject'
import LatestProject from '../../components/LatestProject/LatestProject'
import Footer from "../../components/footer/footer";
function Services() {
  return (
    <React.Fragment>
      <ServicesHeader/>
      <ServicesQuote/>
      <CustomProject/>
      <LatestProject/>
      <Footer/>
    </React.Fragment>
  )
}

export default Services
