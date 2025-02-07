import React, { useEffect, useRef } from "react";
import gsap from "gsap";

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
  const sectionHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const sectionHeadingTextRef = useRef<HTMLParagraphElement | null>(null);

  const serviceCardsRef = useRef<(HTMLDivElement | null)[]>([]); // Array to store refs for each card

  useEffect(() => {
    // ----------------------------------------------
    //Animate the section Heading and heading text
    [sectionHeadingRef, sectionHeadingTextRef].forEach((item) => {
      gsap.from(item.current, {
        scrollTrigger: {
          trigger: item.current,
          start: "top 80%", // Start animation when the top of the element reaches 80% of the viewport
          end: "bottom 60%",
          scrub: 1, // Smooth scrubbing with a 1-second delay
        },
        opacity: 0,
        y: 100, // Slide up effect (from below)
        duration: 1,
        ease: "power2.out",
      });
    });

    // ----------------------------------------------
    // Initialize ScrollTrigger animations for each card
    serviceCardsRef.current.forEach((card) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Start animation when the top of the card reaches 80% of the viewport
            end: "bottom 60%",
            scrub: 1, // Smooth scrubbing with a 2-second delay
          },
          opacity: 0,
          y: 50, // Slide up effect
          duration: 1,
          ease: "power2.out",
        });
      }
    });
  }, []);

  return (
    <section id="services">
      <div id="serviceContainer">
        <div className="sectionTop">
          <h3 className="sectionHeading" ref={sectionHeadingRef}>
            SERVICES WE OFFER
          </h3>
          <p className="sectionHeadingParagraph" ref={sectionHeadingTextRef}>
            Transform Your Fitness Journey with CoreZone
          </p>
        </div>
        <div id="serviceGrid">
          {services.map((service, index) => (
            <div
              className="serviceCard"
              key={index}
              ref={(el) => {
                serviceCardsRef.current[index] = el; // Assign the DOM element to the ref array
              }}
            >
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
