import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ConstructionReuse.css";

const ConstructionReuse = ({
  imageSrc,
  title,
  subtitle,
  isFlex,
  titleTextColor,
  subtitleTextColor,
}) => {
  const containerStyle = isFlex ? { display: "flex" } : {};
  const titleStyle = { color: titleTextColor };
  const subtitleStyle = { color: subtitleTextColor };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div style={containerStyle}>
      <div>
        <img className="img-fluid" src={imageSrc} alt="" />
      </div>
      <div style={{ paddingLeft: "13px" }}>
        <p className="building-para-1" data-aos="fade-right" style={{ ...titleStyle , fontWeight: "700", fontSize:"17px"}}>
          {title} <br />
          <span
            data-aos="fade-right"
            style={{ ...subtitleStyle, fontSize: "15px", fontWeight: "300" }}
          >
            {subtitle}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ConstructionReuse;
