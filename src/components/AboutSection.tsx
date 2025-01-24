import React from "react";
import Image from "next/image";
import About1 from "@/assets/about-1.jpg";
import About2 from "@/assets/about-2.jpg";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="sectionTop">
        <h3 className="sectionHeading">About Us</h3>
      </div>
      <div id="aboutContent">
        <div className="imgDiv">
          <div className="overlay">
            <h5>Elevate Your Fitness Journey</h5>
            <p>
              Discover cutting-edge gym equipment designed to help you achieve
              peak performance.
            </p>
          </div>
          <Image src={About1} alt="Cutting-edge gym equipment" />
        </div>

        <div id="textBox">
          <p>
            Welcome to <span className="highlightedText"> CoreZone</span>, your
            ultimate fitness destination where health and wellness take center
            stage! At CoreZone, we are dedicated to creating a vibrant and
            inclusive space that caters to individuals of all fitness levels.
            Our state-of-the-art gym is equipped with modern workout machines,
            free weights, and functional training areas to support a wide range
            of fitness routines. Whether you’re looking to build strength,
            improve endurance, or enhance flexibility, our certified trainers
            are here to guide you with personalized training plans tailored to
            your unique goals. We offer a variety of classes, including yoga,
            Zumba, HIIT, and strength training, designed to challenge and
            inspire you in a supportive group setting. Our commitment extends
            beyond physical fitness to overall well-being, with nutritional
            consulting and recovery techniques to help you lead a balanced,
            healthy lifestyle. At CoreZone, we pride ourselves on maintaining a
            clean, welcoming environment where every member feels motivated and
            empowered to achieve their best. Join us on a journey to transform
            your fitness experience and unlock your potential with CoreZone.
            <br />
            <span className="highlightedText flex justify-center">
              Move. Train. Thrive.
            </span>
          </p>
        </div>

        <div className="imgDiv">
          <div className="overlay">
            <h5>Lift. Conquer. Repeat.</h5>
            <p>From beginners to pros, this is where champions are forged.</p>
          </div>
          <Image src={About2} alt="Where champions are forged" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
