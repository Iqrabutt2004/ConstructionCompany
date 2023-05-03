import React from "react";
import "./CustomHomeComponent.css";
const CustomHomeComponent = ({ imageSrc, heading}) => {
  return (
    <div className="home-services-pb d-flex justify-content-center">
      <img src={imageSrc} />
      <div className="d-flex flex-column pt-4 px-2">
        <h6>{heading}</h6>
        <p className="home-services-para">
          Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat
        </p>
      </div>
    </div>
  );
};

export default CustomHomeComponent;
