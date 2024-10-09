import React from "react";
import './FoodCard.css';
const FoodCard = ({ name, quantity, date, address, tag, details, foodDetails, isVeg }) => {
  return (
    <div
      className="food-card"
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        margin: "1rem",
        backgroundColor: "#fff", // White background for cards
      }}
    >
      <h2>{name || "Unnamed Food"}</h2>
      <p><strong>Quantity:</strong> {quantity || "N/A"}</p>
      <p><strong>Expiry Date:</strong> {date || "N/A"}</p>
      <p><strong>Address:</strong> {address || "N/A"}</p>
      <p><strong>Type:</strong> {tag || "N/A"}</p>
      <p><strong>Details:</strong> {details || "N/A"}</p>

      {/* Display food-specific details if applicable */}
      {foodDetails && (
        <div>
          <p><strong>Contains Onion/Garlic:</strong> {details.foodContainsOnionGarlic || "N/A"}</p>
          <p><strong>Vegetarian:</strong> {isVeg === 'veg' ? 'Yes' : 'No'}</p>
          <p><strong>Food Items:</strong></p>
          <ul>
            {foodDetails.roti && <li>Roti</li>}
            {foodDetails.rice && <li>Rice</li>}
            {foodDetails.sabzi && <li>Sabzi</li>}
            {foodDetails.dal && <li>Dal</li>}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FoodCard;
