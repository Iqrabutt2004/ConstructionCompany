import React from "react";

const CustomHomeComponent = ({ imageSrc, heading}) => {
  return (
    <div className="d-flex justify-content-center">
      <img src={imageSrc} />
      <div className="d-flex flex-column pt-4 px-2">
        <h6>{heading}</h6>
        <p className="text-muted">
          Lorem ipsum dolor sit consectetur
          <br /> adipiscing elit. Nullam lectus erat
        </p>
      </div>
    </div>
  );
};

export default CustomHomeComponent;
