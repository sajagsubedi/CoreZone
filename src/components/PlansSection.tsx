import React from "react";
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

const PlansSection = () => {
  return (
    <section id="plans">
      <div className="sectionTop">
        <h3 className="sectionHeading">OUR PLANS</h3>
        <p className="sectionHeadingParagraph">
          Choose the perfect plan for your fitness goals.
        </p>
      </div>
      <div className="plansGrid">
        {plans.map((plan) => {
          return (
            <div className={`planCard ${plan.type}`} key={plan.id}>
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
                        <FaCheck className="icon"/>
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
