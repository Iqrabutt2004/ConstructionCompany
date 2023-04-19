import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ConstructionReuse = ({
  imageSrc,
  title,
  subtitle,
  isFlex,
  textColor,
}) => {
  const containerStyle = isFlex ? { display: "flex" } : {}; 
  const textStyle = { color: textColor };


useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div style={containerStyle}>
      <div>
        <img className="img-fluid" src={imageSrc} alt="" />
      </div>
      <div style={{ paddingLeft: "13px" }}>
        <p className="building-para-1" data-aos="fade-right" style={textStyle}>
          {title} <br />
          <span
            data-aos="fade-right"
            style={{ fontSize: "12px", fontWeight: "200" }}
          >
            {subtitle}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ConstructionReuse;
