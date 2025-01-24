import React from "react";
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="page1">
      <h1>MOVE. TRAIN. THRIVE.</h1>
      <h2>WELCOME TO COREZONE FITNESS!</h2>
      <p>
        CoreZone Fitness is a state-of-the-art gym designed to empower your
        fitness journey. Dedicated to innovation, personal growth, and creating
        a vibrant, inclusive space where everyone can achieve their goals.
      </p>
      <div id="downArrow">
        <FaArrowDown id="icon"/>
      </div>
    </section>
  );
};

export default HeroSection;
