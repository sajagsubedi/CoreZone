"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    id: 1,
    name: "Basic",
    price: "$29",
    priceDuration: "monthly",
    description:
      "Start your fitness journey with essential tools and guidance to build a strong foundation",
    features: [
      "Access to standard gym equipment",
      "Monthly fitness progress tracking",
      "Personalized workout suggestions",
    ],
    type: "basic",
  },
  {
    id: 2,
    name: "Standard",
    price: "$49",
    priceDuration: "monthly",
    description:
      "Take your workouts to the next level with advanced facilities and group classes to stay motivated.",
    features: [
      "All features from Basic Plan",
      "Group fitness classes included",
      "One consultation with a fitness coach monthly",
    ],
    type: "standard",
  },
  {
    id: 3,
    name: "Premium",
    price: "$59",
    priceDuration: "monthly",
    description:
      "Achieve your ultimate fitness goals with exclusive perks, personal training, and tailored nutrition.",
    features: [
      "All features from Standard Plan",
      "Unlimited personal training sessions",
      "Nutrition and meal planning assistance",
    ],
    type: "premium",
  },
];

interface positionalValType {
  x?: number;
  y?: number;
}

const PlansSection = () => {
  const sectionHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const sectionHeadingTextRef = useRef<HTMLParagraphElement | null>(null);

  const planCardsRef = useRef<(HTMLDivElement | null)[]>([]); // Array to store refs for each plan card

  useEffect(() => {
    // ----------------------------------------------
    //Animate the section Heading and heading text
    [sectionHeadingRef, sectionHeadingTextRef].forEach((item) => {
      gsap.from(item.current, {
        scrollTrigger: {
          trigger: item.current,
          start: "top 90%", // Start animation when the top of the element reaches 80% of the viewport
          end: "bottom 90%",
          scrub: true, // Smooth scrubbing with a 1-second delay
        },
        opacity: 0,
        y: 100, // Slide up effect (from below)
        duration: 1,
        ease: "power2.out",
      });
    });

    // Initialize ScrollTrigger animations for each plan card
    planCardsRef.current.forEach((card, index) => {
      if (card) {
        const positionalVal: positionalValType = {};
        if (index == 0) {
          positionalVal.x = -100;
        } else if (index == 1) {
          positionalVal.y = 100;
        } else {
          positionalVal.x = 100;
        }
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%", // Start animation when the top of the card reaches 80% of the viewport
            end: "bottom 90%",
            scrub: true, // Smooth scrubbing ensures the animation continues even if scrolling stops
          },
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          ...positionalVal,
        });
      }
    });
  }, []);

  return (
    <section id="plans">
      <div className="sectionTop">
        <h3 className="sectionHeading" ref={sectionHeadingRef}>
          OUR PLANS
        </h3>
        <p className="sectionHeadingParagraph" ref={sectionHeadingTextRef}>
          Choose the perfect plan for your fitness goals.
        </p>
      </div>
      <div className="plansGrid">
        {plans.map((plan, index) => {
          return (
            <div
              className={`planCard ${plan.type}`}
              key={plan.id}
              ref={(el) => {
                planCardsRef.current[index] = el; // Assign the DOM element to the ref array
              }}
            >
              <h3 className="planTitle">{plan.name}</h3>
              <div className="planPrice">
                <span className="priceAmount">{plan.price}</span>
                <span className="priceDuration">/{plan.priceDuration}</span>
              </div>
              <p className="planDescription">{plan.description}</p>
              <ul className="planFeatures">
                {plan.features.map((feature, id) => {
                  return (
                    <li key={id}>
                      <span className="mr-3">
                        <FaCheck className="icon" />
                      </span>
                      {feature}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PlansSection;
