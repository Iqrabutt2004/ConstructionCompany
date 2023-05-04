import React from "react";
import YouTube from "react-youtube";
import ButtonReuse from "../ReusableComponent/button/button";
import "./video.css";

const MyVideoComponent = () => {
  const videoUrl = "https://www.youtube.com/watch?v=sssrfVJUdFk";
  const opts = {
    width: "100%",
    height: "600px",
  };
  return (
    <div className="video-flex">
      <div className="video-flex-one video-bg">
        <h3 className="about-process-style">About Process</h3>
        <div className="line-three"></div>
        <p className="about-process-paragraph ">
          Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
          cursus, dolor a mollis consectetur, fermentum massa, a commodo elit
          dui sit amet risus.
          <ul className="about-process-li">
            <li>Maecenas ornare nisl</li>
            <li>A tortor ultrices bibendum</li>
            <li>Nulla fermentum</li>
            <li>Metus quis</li>
            <li>Sodales tristique</li>
          </ul>
        </p>
      </div>
      <div className="video-flex-two">
        <div style={{ height: "600px" }}>
          <YouTube videoId={videoUrl.split("v=")[1]} opts={opts} />
        </div>
        <div className="video-flex">
          <div className="video-flex-three">
            <div className="p-4">
              <h3 className="quote-text">Call for a Quote</h3>
              <h3 className="quote-number">(346) 234-6973</h3>
            </div>
          </div>
          <div className="video-flex-four">
            <ButtonReuse
              className=" hvr-wobble-horizontal"
              text="ONLINE ESTIMATE FORM"
              border="4px"
              borderColor="black"
              backgroundColor="white"
              textColor="black"
              fontSize="14"
              fontWeight="500"
              padding="8px 1rem"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyVideoComponent;
