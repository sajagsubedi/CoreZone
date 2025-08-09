"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HeroSection,
  VideoSection,
  ScrollerSection,
  AboutSection,
  ServicesSection,
  PlansSection,
  QuoteSection,
  ContactSection,
} from "@/components";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // GSAP animations
    gsap.to("#main", {
      backgroundColor: "#000",
      bgOpacity: 1,
      scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        scrub: 2,
        start: "top -20%",
        end: "top -70%",
      },
    });
    const cursorLinks = document.querySelectorAll(".cursorLink");
    const crsr = document.querySelector("#cursor");

    // Add hover effects to  cursor on mouse enter
    cursorLinks.forEach((cursorLink) => {
      cursorLink.addEventListener("mouseenter", () => {
        crsr?.classList.add("hoverCursor");
      });
      cursorLink.addEventListener("mouseout", () => {
        crsr?.classList.remove("hoverCursor");
      });
    });
    return () => {
      cursorLinks.forEach((cursorLink) => {
        cursorLink.removeEventListener("mouseenter", () => {
          crsr?.classList.add("hoverCursor");
        });
        cursorLink.removeEventListener("mouseout", () => {
          crsr?.classList.remove("hoverCursor");
        });
      });
    };
  }, []);

  return (
    <>
      <VideoSection />
      <main id="main">
        <HeroSection />
        <ScrollerSection />
        <div className="linearGradientBg"></div>
        <AboutSection />
        <ServicesSection />
        <PlansSection />
        <QuoteSection />
        <ContactSection />
      </main>
    </>
  );
};

export default App;
