import React from "react";
import "./css/SelectsImg.css";
import img1 from "../assets/img3.jpg";

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
