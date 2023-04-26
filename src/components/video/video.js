import React from "react";
import { Row, Col } from "react-bootstrap";
import YouTube from "react-youtube";
import "./video.css";
import ButtonReuse from "../button/button";

const MyVideoComponent = () => {
const videoUrl = "https://www.youtube.com/watch?v=sssrfVJUdFk";
 const opts = {
   width: "100%",
   height:"479px"
 };
  return (
    <div>
      <div className="video-flex">
        <div className="video-flex-1">
          <div className="video-paddingSet">
            <div className="video-bg ">
              <h3 className="text-white">About Process</h3>
              <div className="line-3"></div>
              <p className="text-white pt-5">
                Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
                Proin cursus, dolor a mollis consectetur, fermentum massa, a
                commodo elit dui sit amet risus.
              </p>
              <ul className="text-white">
                <li>Maecenas ornare nisl</li>
                <li>A tortor ultrices bibendum</li>
                <li>Nulla fermentum</li>
                <li>Metus quis</li>
                <li>Sodales tristique</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="video-flex-2">
          <div style={{ height: "479px" }}>
            <YouTube videoId={videoUrl.split("v=")[1]} opts={opts} />
          </div>
          <div>
            <div className="video-flex">
              <div className="video-flex-3">
                <div className="call-bg">
                  <h3>Call for a Quote</h3>
                  <h3>(346) 234-6973</h3>
                </div>
              </div>
              <div className="video-flex-4">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "2rem",
                  }}
                >
                  <ButtonReuse
                    className=" btn-after hvr-bob"
                    text="ONLINE ESTIMATE FORM"
                    border="4px"
                    borderColor="black"
                    backgroundColor="white"
                    textColor="black"
                    fontSize="14"
                    fontWeight="500"
                    width="200"
                    height="42"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyVideoComponent;
