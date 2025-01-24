import React from "react";
const services = [
  {
    title: "Personal Training",
    description:
      "One-on-one customized workout plans with expert trainers dedicated to your fitness goals.",
  },
  {
    title: "Group Classes",
    description:
      "High-energy group sessions led by certified instructors in various fitness disciplines.",
  },
  {
    title: "Mindfulness & Wellness",
    description:
      "Holistic programs combining physical fitness with mental well-being and stress management.",
  },
  {
    title: "Cardio Training",
    description:
      "State-of-the-art cardio equipment and specialized programs for heart health and endurance.",
  },
  {
    title: "HIIT Workouts",
    description:
      "High-Intensity Interval Training sessions designed for maximum calorie burn and efficiency.",
  },
  {
    title: "Yoga & Flexibility",
    description:
      "Expert-led yoga classes focusing on flexibility, strength, and mind-body connection.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services">
      <div id="serviceContainer">
        <div className="sectionTop">
          <h3 className="sectionHeading">SERVICES WE OFFER</h3>
          <p className="sectionHeadingParagraph">
            Transform Your Fitness Journey with CoreZone
          </p>
        </div>
        <div id="serviceGrid">
          {services.map((service,id) => (
            <div className="serviceCard" key={id}>
              <h4 className="cardTitle">{service.title}</h4>
              <p className="cardText">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
