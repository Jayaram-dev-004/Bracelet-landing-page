import React, { useState, useEffect} from "react";
import bracelet from "../assets/pageone-bracelet.png";
import "./PageOne.css";

const PageOne = ({ onProceed }) => {
  const [showButton, setShowButton] = useState(false);

  // Show button after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-one">
      <div className="image-container">
        <img 
          src={bracelet}
          alt="Bracelet" 
          className="bracelet-image" 
        />
      </div>
      <h1 className="headline">-- Wants to look unique? --</h1>
      {showButton && (
        <button className="cta-button" onClick={onProceed}>
          Let&apos;s move
        </button>
      )}
    </div>
  );
};

export default PageOne;