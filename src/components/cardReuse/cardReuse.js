import React from "react";
import "./cardReuse.css";
import ButtonReuse from "../../components/button/button";


const CardReuse = ({ title, body, borderStyle, textColor }) => {
  const textStyle = {
    color: textColor,
  };

  return (
    <div className="card" style={borderStyle}>
      <h6 className="card-body pt-5">{title}</h6>
      <p className="card-body" style={textStyle}>
        {body}
      </p>{" "}
      <div className="buttonPadding">
        <ButtonReuse
          className=" btn-after hvr-shrink hvr-shutter-out-vertical"
          text="LEARN MORE"
          border="1px" // Set border width to 1px
          borderColor="black"
          backgroundColor="white"
          textColor="black"
          fontSize="14"
          fontWeight="300"
          width="160"
          height="35"
        />
      </div>
    </div>
  );
};

export default CardReuse;
