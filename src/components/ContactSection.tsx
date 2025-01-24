import React from "react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div id="background-blur-top"></div>
      <div id="background-blur-bottom"></div>
      <div id="contact-container">
        <div className="sectionTop">
          <h3 className="sectionHeading">CONTACT US</h3>
          <p className="sectionHeadingParagraph">
            Ready to transform your fitness journey? Reach out to us and let&apos;s
            make it happen together.
          </p>
        </div>
        <div id="contact-content">
          <div id="contact-info">
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
                  className="social-link"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://x.com/sajag_subedi"
                  target="_blank"
                  className="social-link"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/sajagsubedi/"
                  target="_blank"
                  className="social-link"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <form id="contact-form">
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
