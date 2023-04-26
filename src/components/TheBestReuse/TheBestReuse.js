import React from "react";
import Arrow from "../../assets/images/arrow.svg";
const TheBestReuse = ({ title }) => {
  return (
    <div className="paddingReuse">
      <div className="d-flex py-2">
        <img className="img-fluid" src={Arrow} alt="" />
        <img className="img-fluid" src={Arrow} alt="" />
        <h6 className="eco-style">{title}</h6>
      </div>
      <p className="eco-style-para px-5">
        Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis
        a pellentesque nec, egestas non nisi.
      </p>
    </div>
  );
};

export default TheBestReuse;
