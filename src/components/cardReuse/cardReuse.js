import React from "react";
import ButtonReuse from "../../components/button/button";
import "./cardReuse.css";
const CardReuse = ({
  title,
  body,
  borderStyle,
  textColor,
  backgroundColor,
}) => {
  const textStyle = {
    color: textColor,
  };

  const cardStyle = {
    ...borderStyle,
    backgroundColor: backgroundColor,
  };

  return (
    <div className="card" style={cardStyle}>
      <h6 className="card-body card-headerStyle pt-5">{title}</h6>
      <p className="card-body card-para" style={textStyle}>
        {body}
      </p>{" "}
      <div className="buttonPadding">
        <ButtonReuse
          className=" btn-after hvr-bob"
          text="LEARN MORE"
          border="1px"
          borderColor="#666666"
          backgroundColor="#F7F7F7"
          textColor="#666666"
          fontSize="11"
          fontWeight="600"
          padding="0px 25px 3px 25px "
        />
      </div>
    </div>
  );
};

export default CardReuse;
