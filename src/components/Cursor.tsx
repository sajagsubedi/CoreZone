"use client";

import React, { useEffect, useRef } from "react";

const Cursor: React.FC = () => {
  const crsr = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (crsr.current) {
        crsr.current.style.display = "block";
        crsr.current.style.left = `${e.clientX}px`;
        crsr.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseEnter = () => {
      if (crsr.current) {
        crsr.current.style.display = "block";
      }
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return <div id="cursor" ref={crsr}></div>;
};

export default Cursor;
