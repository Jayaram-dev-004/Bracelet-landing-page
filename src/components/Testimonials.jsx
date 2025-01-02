import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";
import Emily from "../assets/Testimonials/Emily.jpg"
import Rahul from "../assets/Testimonials/Rahul.jpg"
import Sophia from "../assets/Testimonials/Sophia.jpg"

const testimonials = [
  {
    name: "Sophia",
    feedback: "The quality of these bracelets is phenomenal. I feel special every time I wear them!",
    image: Sophia,
  },
  {
    name: "Rahul",
    feedback: "Amazing craftsmanship and unique designs! Absolutely love it.",
    image: Rahul,
  },
  {
    name: "Emily",
    feedback: "These bracelets make perfect gifts. They always bring a smile to the receiver!",
    image: Emily,
  },
];

const Testimonials = () => {
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
    <div className={`testimonials-section ${isVisible ? "fade-in" : ""}`} ref={sectionRef}>
      <h2 className="section-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s picture`}
              className="testimonial-image"
            />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;