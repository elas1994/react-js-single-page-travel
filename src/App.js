import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Search from "./components/Search";
import Selects from "./components/Selects";
import ImgCarousel from "./components/ImgCarousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
