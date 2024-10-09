import React, { useState } from "react";
import ImgDisplay from "../components/ImgDisplay/ImgDisplay";
import AboutUs from "../components/AboutUs/AboutUs";
import HelpCard from "../components/HelpCard/HelpCard";
import Vision from "../components/Vision/Vision";
import Partner from "../components/Partner/Partner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header"; // Import the Header component

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("ImgDisplay");

  console.log("Active Component:", activeComponent); // Debugging log

  return (
    <div>
      <Header setActiveComponent={setActiveComponent} />

      {activeComponent === "ImgDisplay" && <ImgDisplay />}
      {activeComponent === "AboutUs" && <AboutUs />}
      {activeComponent === "HelpCard" && <HelpCard />}
      {activeComponent === "Vision" && <Vision />}
      {activeComponent === "Partner" && <Partner />}

      <Footer />
    </div>
  );
};

export default Home;
