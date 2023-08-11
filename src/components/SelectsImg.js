import React from "react";
import "./css/SelectsImg.css";

const SelectsImg = ({ img, text }) => {
  return (
    <div className="selects-location">
      <img src={img} alt="img" />
      <div className="overlay">
        <p className="location-name">{text}</p>
      </div>
    </div>
  );
};

export default SelectsImg;
