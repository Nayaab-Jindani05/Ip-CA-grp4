import React, { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
import axios from "axios";
import "./Food.css";

const Food = ({ donationHistory }) => {
  const [foodItems, setFoodItems] = useState([]); // Renamed for clarity
  const [selectedTag, setSelectedTag] = useState("all");

  useEffect(() => {
    fetchFoodItems();
  }, []);

  const fetchFoodItems = async () => {
    try {
      const response = await axios.get("http://localhost:3000/allfoods");
      setFoodItems(response.data);
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  };

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value); // Ensure this function is defined
  };

  // Merge fetched food with donation history for display
  const allFoodItems = [
    ...foodItems.map(item => ({
      _id: item._id,
      foodName: item.foodName || "Unnamed Food",
      quantity: item.quantity || "N/A",
      expiryDate: item.expiryDate || "N/A",
      address: item.address || "N/A",
      foodTag: item.foodTag || "N/A",
      foodDetails: item.foodDetails || "N/A",
    })),
    ...donationHistory.map((item, index) => ({
      _id: `donation-${index}`, // Use a unique identifier for donations
      foodName: item.name || "Unnamed Donation",
      quantity: item.quantity || "N/A",
      expiryDate: item.date || "N/A",
      address: item.address || "N/A",
      foodTag: item.foodTag || "N/A",
      foodDetails: item.details || "N/A",
    })),
  ];

  const filteredFood =
    selectedTag === "all"
      ? allFoodItems
      : allFoodItems.filter(item => item.foodTag === selectedTag);

  return (
    <div className="food" style={{ height: "100vh", background: "#f5f5f5", padding: "2rem" }}>
      <div className="food-container" style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column" }}>
        <div className="header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <h1>Donation History</h1>
          <div className="tags" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <label htmlFor="tags">Filter by type:</label>
            <select
              id="tags"
              name="tags"
              value={selectedTag}
              onChange={handleTagChange} // Ensure this is properly referenced
              style={{
                padding: "0.5rem",
                borderRadius: "0.5rem",
                border: "1px solid #ccc",
              }}
            >
              <option value="all">All</option>
              <option value="veg">Vegetarian</option>
              <option value="nonveg">Non-Vegetarian</option>
            </select>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}>
          {filteredFood.length === 0 ? (
            <p>No donations available.</p>  // Show a message if there are no donations
          ) : (
            filteredFood.map(item => (
              <FoodCard
                key={item._id}  // Use a unique key from either source
                name={item.foodName}
                quantity={item.quantity}
                date={item.expiryDate}
                address={item.address}
                tag={item.foodTag}
                details={item.foodDetails}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Food;
