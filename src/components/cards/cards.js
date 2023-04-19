import React from "react";
const Cards = ({ imageSrc, title, date, category, description }) => {
  return (
    <div className="card card-style-1" >
      <img className="card-img-top" src={imageSrc} alt="Card image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">
          {date} | {category}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Cards
