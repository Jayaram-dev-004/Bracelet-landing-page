import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import homeCat from "../assets/home-cat.png";

const Home = () => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      id="home"
      ref={sectionRef}
      className={`home-section ${isVisible ? "fade-in" : ""}`}
    >
      {/* Hero Section */}
      <div className="hero-text">
        <h1>Your Unique Bracelet Awaits</h1>
        <h4>Crafting timeless elegance with a personal touch</h4>
      </div>

      {/* Content Section */}
      <div className="content-container">
        <div className="text-content">
          <h2>Discover Timeless Bracelets</h2>
          <p>
          Every bracelet is more than just an accessory; it's a symbol of individuality, style, and emotion. Whether you're celebrating a milestone, expressing your unique personality, or seeking a touch of elegance, our collection is crafted to speak to your soul. From timeless designs to modern, statement-making pieces, each bracelet embodies the artistry and precision that set it apart.          </p>
        </div>
        <div className="image-content">
          <img src={homeCat} alt="Bracelet" />
        </div>
      </div>
    </div>
  );
};

export default Home;