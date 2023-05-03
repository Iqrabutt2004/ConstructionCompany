import React from "react";
import HomeImg from "../../assets/images/HomeImg.png";
import ButtonReuse from "../../components/button/button";
import "./ForYears.css";
const ForYears = () => {
  return (
    <div
      className="home-container-one"
      style={{ backgroundImage: `url(${HomeImg})` }}
    >
      <div className="text-container-one">
        <div className="line-style-home"></div>
        <h1>
          We've Been Building For <br /> Over 20 years
        </h1>
        <p className="py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus
          erat
          <br /> consectetur eu sapien eget, rhoncus consectetur sem.
        </p>
        <ButtonReuse
          className="  hvr-bob"
          text="ABOUT US"
          border="0px"
          borderColor="#FFB400"
          backgroundColor="#FFB400"
          textColor="white"
          fontSize="14"
          fontWeight="600"
          padding="14px 48px"
        />
      </div>
    </div>
  );
};

export default ForYears;
