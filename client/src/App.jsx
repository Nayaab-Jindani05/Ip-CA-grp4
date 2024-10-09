// src/App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import FoodDonation from "./pages/FoodDonation";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./dashboard/Layout";
import Profile from "./dashboard/Profile";
import Food from "./dashboard/Food";
import AboutUs from "./components/AboutUs/AboutUs"; 
import Vision from "./components/Vision/Vision"; 
import Schedule from "./dashboard/SchedulePage"; 
import Partner from "./components/Partner/Partner";

function App() {
  const token = localStorage.getItem("token");
  const { pathname } = useLocation();
  
  const [donationHistory, setDonationHistory] = useState([]);

  const addDonationToHistory = (newDonation) => {
    setDonationHistory((prevHistory) => [...prevHistory, newDonation]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/donation" element={<FoodDonation addDonationToHistory={addDonationToHistory} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/partner" element={<Partner />} />

      {/* Protected Routes */}
      {token ? (
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<FoodDonation addDonationToHistory={addDonationToHistory} />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/food" element={<Food donationHistory={donationHistory} />} />
          <Route path="/dashboard/schedule" element={<Schedule />} />
        </Route>
      ) : (
        <Route path="*" element={<Login />} />
      )}
    </Routes>
  );
}

export default App;
