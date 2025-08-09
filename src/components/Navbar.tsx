"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import gsap from "gsap";
import Image from "next/image";
const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const menuToggleRef = useRef<HTMLDivElement | null>(null);

  // Menu toggle functionality
  const handleMenuToggle = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("active");
    }
  };
  useEffect(() => {
    gsap.to("#nav", {
      backgroundColor: "#000",
      duration: 0.5,
      height: "5rem",
      scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -15%",
        scrub: 2,
      },
    });
  });
  return (
    <nav id="nav" ref={navRef}>
      <div id="phoneVisible">
        <div id="logo">
          <Image
            src="/logo.svg"
            alt="logo"
            className="h-12 w-auto"
            width={48}
            height={48}
          />
          <h2>CoreZone</h2>
        </div>
        <div id="menuToggle" ref={menuToggleRef} onClick={handleMenuToggle}>
          <GiHamburgerMenu />
        </div>
      </div>
      <ul id="menu">
        {["Home", "About", "Services", "Plans", "Contact"].map((item) => (
          <li className="navLinkItem" key={item}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="navLink cursorLink"
            >
              {item}
            </Link>
            <Link
              href={`#${item.toLowerCase()}`}
              className="hoverLink cursorLink"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
