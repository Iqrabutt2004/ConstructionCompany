import React from "react";
import ButtonReuse from "../ReusableComponent/button/button";
import "./HeaderReuse.css";

const HeaderReuse = ({ title, subtitle, className, buttonText }) => {
  return (
    <div className={className}>
      <div className="text-container-2">
        <h1 className="heading-reuse" data-aos="fade-up">
          {title}
        </h1>
        <p className="py-3 heading-reuse-text" data-aos="fade-up">
          {subtitle}
        </p>
        <ButtonReuse
          className="hvr-bob hvr-shutter-out-horizontal"
          text={buttonText}
          border="0px"
          borderColor="#FFB400"
          backgroundColor="#FFB400"
          textColor="white"
          fontSize="14"
          fontWeight="600"
          width="180"
          height="42"
        />
      </div>
    </div>
  );
};

export default HeaderReuse;
