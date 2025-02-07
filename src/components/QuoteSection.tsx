"use client";

import React, { useEffect } from "react";
import QuoteLeft from "@/assets/quote-left.svg";
import QuoteRight from "@/assets/quote-right.svg";
import Image from "next/image";
import gsap from "gsap";

const QuoteSection = () => {
  useEffect(() => {
    // GSAP matchMedia for responsive animations
    const mm = gsap.matchMedia();

    // Desktop animations
    mm.add("(min-width: 800px)", () => {
      gsap.to("#leftQuote", {
        x: 70,
        y: 20,
        scrollTrigger: {
          trigger: "#leftQuote",
          scroller: "body",
          start: "top 60%",
          end: "top 80%",
          scrub: 2,
        },
      });
      gsap.to("#rightQuote", {
        x: -70,
        y: -20,
        scrollTrigger: {
          trigger: "#leftQuote",
          scroller: "body",
          start: "top 60%",
          end: "top 80%",
          scrub: 2,
        },
      });
    });

    // Phone animations
    mm.add("(max-width: 800px)", () => {
      gsap.to("#leftQuote", {
        opacity: 1,
        scrollTrigger: {
          trigger: "#leftQuote",
          scroller: "body",
          start: "top 70%",
          end: "top 90%",
          scrub: 2,
        },
      });
      gsap.to("#rightQuote", {
        opacity: 1,
        scrollTrigger: {
          trigger: "#leftQuote",
          scroller: "body",
          start: "top 70%",
          end: "top 90%",
          scrub: 2,
        },
      });
    });
  }, []);
  return (
    <section id="quote">
      <div id="quoteContent">
        <Image src={QuoteLeft} alt="left" id="leftQuote" />
        <p>
          Find your strength, push your limits, and enjoy every moment at
          CoreZone. With supportive staff and a vibrant atmosphere, it’s the
          perfect place to challenge yourself, recharge, and thrive. Discover
          the energy – you deserve it!
        </p>
        <Image src={QuoteRight} alt="right" id="rightQuote" />
      </div>
    </section>
  );
};

export default QuoteSection;
