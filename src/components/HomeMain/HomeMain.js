import React from "react";
import "../../assets/css/hover-min.css";
import "../../assets/css/hover.css";
import HomeMainImg from "../../assets/images/home-head.png";
import ButtonReuse from "../../components/button/button";
import "./HomeMain.css";

const HomeMain = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${HomeMainImg})` }}
    >
      <div className="text-container">
        <div className="line-style-home"></div>
        <h1>Construction Inc</h1>
        <p className="py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus
          erat
          <br /> consectetur eu sapien eget, rhoncus consectetur sem.
        </p>
        <ButtonReuse
          className="  hvr-bob hvr-shutter-out-horizontal"
          text="VIEW OUR WORK"
          border="0px"
          borderColor="#FFB400"
          backgroundColor="#FFB400"
          textColor="white"
          fontSize="14"
          fontWeight="600"
          padding="12px 2.5rem"
        />
      </div>
    </div>
  );
};

export default HomeMain;
