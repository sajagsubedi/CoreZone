import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPaperPlane,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot, FaTwitter } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer id="footer">
      <div id="footer-container">
        <div id="footer-grid">
          <div>
            <div id="footer-brand">
              <Image
                src="logo.svg"
                alt="logo"
                className="h-12 w-auto"
                width={48}
                height={48}
              />
              <span id="footer-brand-title">CoreZone</span>
            </div>
            <p id="footer-description">
              Empowering your fitness journey with state-of-the-art equipment
              and expert guidance.
            </p>
            <div id="footer-social-links">
              <a
                href="https://www.facebook.com/sajagsubedi3"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/sajagsubedi/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/sajag_subedi"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/@sajagsubedi"
                target="_blank"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h3 id="footer-quick-links-title">Quick Links</h3>
            <ul id="footer-quick-links-list">
              <li>
                <Link href="/" className="cursorLink">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="cursorLink">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="cursorLink">
                  Services
                </a>
              </li>
              <li>
                <a href="#plans" className="cursorLink">
                  Plans
                </a>
              </li>
              <li>
                <a href="#contact" className="cursorLink">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 id="footer-contact-title">Contact Us</h3>
            <div id="footer-contact-info">
              <div>
                <FaLocationDot className="text-primaryColor" />
                <span>Pokhara-11, Phoolbari</span>
              </div>
              <div>
                <FaPhoneAlt className="text-primaryColor" />
                <span>+977 9876543210</span>
              </div>
              <div>
                <MdMail className="text-primaryColor" />
                <span>sajagsubedi03@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <form id="footer-newsletter">
              <h3 id="footer-newsletter-title">Join Our Newsletter</h3>
              <div className="flex gap-2">
                <input
                  id="footer-newsletter-input"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <button
                  id="footer-newsletter-button"
                  type="submit"
                  className="cursorLink"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div id="footer-bottom">
          <p>© 2024 CoreZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
