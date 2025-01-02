import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home";
import CollectionsSection from "./CollectionsSection";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
import "./PageTwo.css";

const PageTwo = () => {
  return (
    <div className="app-container">
      <Navbar/>
      <div id="home">
        <Home />
      </div>
      <div id="collections">
        <CollectionsSection />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
};

export default PageTwo;