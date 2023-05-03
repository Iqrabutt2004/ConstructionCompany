import React from 'react'
import HomeMain from '../../components/HomeMain/HomeMain'
import HomeConstruction from '../../components/HomeConstruction/HomeConstruction'
import ForYears from '../../components/ForYears/ForYears';
import Client from "../../components/Client/Client";
import Footer from "../../components/footer/footer";
import NoProject from '../../components/NoProject/NoProject';
function Home() {
  return (
    <React.Fragment>
      <HomeMain/>
      <HomeConstruction/>
      <NoProject/>
      <ForYears/>
      <Client/>
      <Footer/>
    </React.Fragment>
  )
}

export default Home
