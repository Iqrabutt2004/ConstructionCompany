import React from "react";
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
  return (
    <div style={containerStyle}>
      <div>
        <img className="img-fluid" src={imageSrc} alt="" />
      </div>
      <div className="head-title">
        <p
          className="building-paragraph"
          data-aos="fade-right"
          style={{ ...titleStyle }}
        >
          {title} <br />
          <span
            className="head-subtitle"
            data-aos="fade-right"
            style={{ ...subtitleStyle }}
          >
            {subtitle}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ConstructionReuse;
