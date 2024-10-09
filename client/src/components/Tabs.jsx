// src/components/Tabs/Tabs.jsx
import React, { useState } from "react";
import AboutUs from "../AboutUs/AboutUs";
import Vision from "../Vision/Vision";
import HelpCard from "../HelpCard/HelpCard";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("aboutus");

  const renderTabContent = () => {
    switch (activeTab) {
      case "aboutus":
        return <AboutUs />;
      case "vision":
        return <Vision />;
      case "helpcard":
        return <HelpCard />;
      default:
        return <AboutUs />;
    }
  };

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab("aboutus")}>About Us</button>
        <button onClick={() => setActiveTab("vision")}>Our Vision</button>
        <button onClick={() => setActiveTab("helpcard")}>Help Card</button>
      </div>
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Tabs;
