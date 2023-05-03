import React from 'react'
import AboutDivi from '../../components/AboutDivi/AboutDivi'
import TheBest from '../../components/TheBest/TheBest'
import Footer from "../../components/footer/footer";
import AboutHeader from "../../components/AboutHeader/AboutHeader"
function About() {
  return (
    <React.Fragment>
      <AboutHeader />
      <AboutDivi />
      <TheBest />
      <Footer />
    </React.Fragment>
  );
}

export default About
