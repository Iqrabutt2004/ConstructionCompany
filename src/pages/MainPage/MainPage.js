import React from "react";
import MainPageStart from "../../components/MainPageStart/MainPageStart";
import ServicesQuote from "../../components/servicesQuote/ServicesQuote";
import MainProject from "../../components/MainProject/MainProject";
import MainLatest from "../../components/MainLatest/MainLatest";
import MyVideoComponent from "../../components/video/video";
import Build from "../../components/Build/Build";
import Client from "../../components/Client/Client";
import Footer from "../../components/ReusableComponent/footer/footer";

function MainPage() {
  return (
    <React.Fragment>
      <MainPageStart />
      <ServicesQuote />
      <MainProject />
      <MainLatest />
      <MyVideoComponent />
      <Build />
      <Client />
      <Footer />
    </React.Fragment>
  );
}

export default MainPage;
