import React from "react";
import "./css/ImgCarousel.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/img5.jpg";
import img2 from "../assets/img8.jpg";
import img3 from "../assets/img11.jpg";
import img4 from "../assets/img16.jpg";
import img5 from "../assets/img19.jpg";
import img6 from "../assets/img21.jpg";
import img7 from "../assets/img4.jpg";
import img8 from "../assets/img14.jpg";
import img9 from "../assets/img13.jpg";

const ImgCarousel = () => {
  return (
    <div name="carousel" className="container">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        swipeable={true}
        useKeyboardArrows={true}
        stopOnHover={true}
      >
        <div>
          <img src={img1} />
          <p className="legend">img1</p>
        </div>

        <div>
          <img src={img2} />
          <p className="legend">img2</p>
        </div>

        <div>
          <img src={img3} />
          <p className="legend">img3</p>
        </div>

        <div>
          <img src={img9} />
          <p className="legend">img9</p>
        </div>

        <div>
          <img src={img4} />
          <p className="legend">img4</p>
        </div>

        <div>
          <img src={img5} />
          <p className="legend">img5</p>
        </div>

        <div>
          <img src={img6} />
          <p className="legend">img6</p>
        </div>

        <div>
          <img src={img7} />
          <p className="legend">img7</p>
        </div>

        <div>
          <img src={img8} />
          <p className="legend">img8</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ImgCarousel;
