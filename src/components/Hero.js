import React from "react";
import "./css/Hero.css";
import Video from "../assets/video2.mp4";
import { BiSearch } from "react-icons/bi";

const Hero = () => {
  const assetsPath = "../assets/video4.mp4";

  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source type="video/mp4" src={Video} />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>First Class Travel</h1>
        <h2>Top 1% Locations Worldwide</h2>
        <form className="form">
          <div>
            <input type="text" placeholder="Search Destinations" />
          </div>
          <div>
            <button>
              <BiSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
