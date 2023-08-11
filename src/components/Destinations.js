import React, { useState } from "react";
import "./css/Destinations.css";
import img9 from "../assets/img22.jpg";
import img5 from "../assets/img23.jpg";
import img6 from "../assets/img24.jpg";
import img8 from "../assets/img25.jpg";
import img4 from "../assets/img26.jpg";
import img10 from "../assets/img27.jpg";

const Destinations = () => {
  const [imageSrc, setImageSrc] = useState(img5);

  function getImageSrc(event) {
    setImageSrc(event.target.src);
  }

  return (
    <div name="destinations" className="destinations">
      <h1>All-Inclusive Resorts</h1>
      <p>On the Caribbean's Best Beaches</p>
      <div className="img-container">
        <img src={imageSrc} alt="img3" className="big-image image-grid-row-2" />
        <img onClick={getImageSrc} src={img5} alt="img5" />
        <img onClick={getImageSrc} src={img6} alt="img6" />
        <img onClick={getImageSrc} src={img8} alt="img8" />
        <img onClick={getImageSrc} src={img4} alt="img4" />
        <img onClick={getImageSrc} src={img9} alt="img9" />
        <img onClick={getImageSrc} src={img10} alt="img10" />
      </div>
    </div>
  );
};

export default Destinations;
