import React from "react";
import "./cards.css";

const Cards = ({ imageSrc, title, date, category, description }) => {
  return (
    <div className="card card-style-1" >
      <img className="card-img-top" src={imageSrc} alt="pictures of card top" />
      <div className="card-body">
        <h5 className="card-title card-heading">{title}</h5>
        <p className="card-text card-date">
          {date} | {category}
        </p>
        <p className="card-desc">{description}</p>
      </div>
    </div>
  );
};

export default Cards
