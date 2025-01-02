import React, { useEffect, useRef, useState } from "react";
import EleganceRedefined from "../assets/collections-images/Elegance-Redefined.jpg";
import BohoVibes from "../assets/collections-images/Boho-Vibes.jpg";
import LuxeCharm from "../assets/collections-images/Luxe-Charm.jpg";
import BoldandBeautiful from "../assets/collections-images/Bold-and-Beautiful.jpg";
import "./CollectionsSection.css";

const collections = [
  { image: EleganceRedefined, name: "Elegance Redefined", description: "Timeless beauty, modern grace." },
  { image: BohoVibes, name: "Boho Vibes", description: "Free-spirited charm with earthy tones." },
  { image: LuxeCharm, name: "Luxe Charm", description: "Gold, silver, and gemstones for every occasion." },
  { image: BoldandBeautiful, name: "Bold and Beautiful", description: "Colors, geometric designs, and aesthetics." },
];

const CollectionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      id="collection"
      ref={sectionRef}
      className={`collections-section ${isVisible ? "fade-in" : ""}`}
    >
      <div className="collections-container">
        {collections.map((collection, index) => (
          <div className="collection-card" key={index}>
            <img src={collection.image} alt={collection.name} />
            <div className="collection-text">
              <h2>{collection.name}</h2>
              <p>{collection.description}</p>
              <button className="collection-btn">Explore</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsSection;