import React from "react";
import "./css/Selects.css";

import img1 from "../assets/img3.jpg";
import img2 from "../assets/img20.jpg";
import img3 from "../assets/img12.jpg";
import img4 from "../assets/img13.jpg";
import img5 from "../assets/img17.jpg";
import img6 from "../assets/img15.jpg";

import SelectsImg from "./SelectsImg";

const Selects = () => {
  return (
    <div name="travel" className="selects">
      <div className="container">
        <SelectsImg img={img1} text="Bora Bora" />
        <SelectsImg img={img2} text="Emerald Bay" />
        <SelectsImg img={img3} text="Maldives" />
        <SelectsImg img={img4} text="Grenada" />
        <SelectsImg img={img5} text="Barbados" />
        <SelectsImg img={img6} text="Key West" />
      </div>
    </div>
  );
};

export default Selects;
