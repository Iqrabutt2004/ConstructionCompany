import React from 'react'
import MainPageStart from '../../components/MainPageStart/MainPageStart'
import ServicesQuote from '../../components/servicesQuote/ServicesQuote'
import MainProject from '../../components/MainProject/MainProject'
import LatestProject from '../../components/LatestProject/LatestProject'
import MyVideoComponent from '../../components/video/video'
import Build from '../../components/Build/Build'
import Client from '../../components/Client/Client'
import Footer from "../../components/footer/footer";
function MainPage() {
  return (
    <div>
   <MainPageStart/>
   <ServicesQuote/>
   <MainProject/>
   <LatestProject/>
   <MyVideoComponent/>
   <Build/>
   <Client/>
   <Footer/>
    </div>
  )
}

export default MainPage
