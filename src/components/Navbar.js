import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-scroll";

import "./css/Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleMobileNav = () => {
    setNav(!nav);
  };

  return (
    <div
      name="home"
      className={nav ? "navbar navbar-background active" : "navbar"}
    >
      <div className="logo">
        <h2>TraveLand</h2>
      </div>
      <ul className="nav-menu">
        <Link className="link" smooth={true} duration={500} to="home">
          <li>Home</li>
        </Link>

        <Link className="link" smooth={true} duration={500} to="destinations">
          <li>Destinations</li>
        </Link>

        <Link className="link" smooth={true} duration={500} to="travel">
          <li>Travel</li>
        </Link>

        <Link className="link" smooth={true} duration={500} to="book">
          <li>Book</li>
        </Link>

        <Link className="link" smooth={true} duration={500} to="carousel">
          <li>Views</li>
        </Link>
      </ul>
      <div className="nav-icons">
        <BiSearch className="icon" />
        <BsFillPersonFill className="icon" />
      </div>

      <div className="hamburger" onClick={toggleMobileNav}>
        {!nav ? (
          <GiHamburgerMenu className="icon" />
        ) : (
          <ImCross className="icon" />
        )}
      </div>
      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <Link className="link" smooth={true} duration={500} to="home">
            <li>Home</li>
          </Link>

          <Link className="link" smooth={true} duration={500} to="destinations">
            <li>Destinations</li>
          </Link>

          <Link className="link" smooth={true} duration={500} to="travel">
            <li>Travel</li>
          </Link>

          <Link className="link" smooth={true} duration={500} to="book">
            <li>Book</li>
          </Link>

          <Link className="link" smooth={true} duration={500} to="carousel">
            <li>Views</li>
          </Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
