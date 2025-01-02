import React, { useEffect, useRef, useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      className={`contact-section ${isVisible ? "fade-in" : ""}`}
      ref={sectionRef}
    >
      <h2 className="section-title">Get In Touch With Us</h2>
      <p className="section-description">
        Have questions? We're here to help. Drop us a message!
      </p>
      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          className="form-input"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="form-input"
          required
        />
        <textarea
          placeholder="Your Message"
          className="form-textarea"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;