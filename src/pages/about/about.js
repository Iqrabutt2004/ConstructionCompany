import React from 'react'
import AboutDivi from '../../components/AboutDivi/AboutDivi'
import TheBest from '../../components/TheBest/TheBest'
import Footer from "../../components/footer/footer";
import AboutHeader from "../../components/AboutHeader/AboutHeader"
function About() {
  return (
    <div>
      <AboutHeader/>
      <AboutDivi/>
      <TheBest/>
      <Footer/>
    </div>
  )
}

export default About
