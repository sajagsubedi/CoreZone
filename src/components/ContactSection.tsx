"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  const sectionHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const sectionHeadingTextRef = useRef<HTMLParagraphElement | null>(null);
  const contactFormRef = useRef(null);
  const contactInfoRef = useRef(null);

  useEffect(() => {
    // ----------------------------------------------
    //Animate the section Heading and heading text
    [sectionHeadingRef, sectionHeadingTextRef].forEach((item) => {
      gsap.from(item.current, {
        scrollTrigger: {
          trigger: item.current,
          start: "top 90%", // Start animation when the top of the element reaches 80% of the viewport
          end: "bottom 90%",
          scrub: true,
        },
        opacity: 0,
        y: 100, // Slide up effect (from below)
        duration: 1,
        ease: "power2.out",
      });
    });
    // ----------------------------------------------
    // anmations for contact infos
    gsap.from(contactInfoRef.current, {
      scrollTrigger: {
        trigger: contactInfoRef.current,
        start: "top 90%",
        end: "bottom 90%",
        scrub: true,
      },
      opacity: 0,
      x: -100, // Slide in from the left
      duration: 1,
      ease: "power2.out",
    });

    // ----------------------------------------------
    // Contact info animation
    gsap.from(contactFormRef.current, {
      scrollTrigger: {
        trigger: contactFormRef.current,
        start: "top 90%",
        end: "bottom 90%",
        scrub: true,
      },
      opacity: 0,
      x: 100, // Slide in from the right
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div id="background-blur-top"></div>
      <div id="background-blur-bottom"></div>
      <div id="contact-container">
        <div className="sectionTop">
          <h3 className="sectionHeading" ref={sectionHeadingRef}>
            CONTACT US
          </h3>
          <p className="sectionHeadingParagraph" ref={sectionHeadingTextRef}>
            Ready to transform your fitness journey? Reach out to us and
            let&apos;s make it happen together.
          </p>
        </div>
        <div id="contact-content">
          <div id="contact-info" ref={contactInfoRef}>
            <div className="info-item">
              <div className="icon-container">
                <FaLocationDot />
              </div>
              <div>
                <h3 className="info-title">Location</h3>
                <p className="info-description">Pokhara-11, Phoolbari</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-container">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="info-title">Phone</h3>
                <p className="info-description">+977 9876543210</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon-container">
                <MdEmail />
              </div>
              <div>
                <h3 className="info-title">Email</h3>
                <p className="info-description">sajagsubedi03@gmail.com</p>
              </div>
            </div>

            <div id="social-links">
              <h3 id="social-title">Follow Us</h3>
              <div id="social-icons">
                <a
                  href="https://www.facebook.com/sajagsubedi3"
                  target="_blank"
                  className="social-link cursorLink"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://x.com/sajag_subedi"
                  target="_blank"
                  className="social-link cursorLink"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/sajagsubedi/"
                  target="_blank"
                  className="social-link cursorLink"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <form id="contact-form" ref={contactFormRef}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                className="form-input"
                required
              ></textarea>
            </div>
            <button type="submit" id="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
