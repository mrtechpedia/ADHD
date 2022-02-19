import React from "react";
import img from "../../assets/6.webp";
import "./hero.styles.css";

function Hero() {
  return (
    <div>
      <img src={img} alt="" className="hero-img"></img>
    </div>
  );
}

export default Hero;
