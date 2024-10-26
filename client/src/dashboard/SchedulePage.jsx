import React, { useState } from 'react';
import './SchedulePage.css'; // Import the CSS file

function Schedule() {
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pickupDate && pickupTime) {
      setMessage(`Pickup scheduled for ${pickupDate} at ${pickupTime}.`); // Corrected template literal
    } else {
      setMessage('Please select both date and time.');
    }
  };

  return (
    <div className="background-container">
      <div className="container">
        <h1 className="heading">Schedule Pickup</h1>
        <form onSubmit={handleSubmit} className="form">
          <label className="label">
            Select Pickup Date:
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              required
              className="input"
            />
          </label>
          <label className="label">
            Select Pickup Time:
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              required
              className="input"
            />
          </label>
          <button type="submit" className="button">
            Schedule Pickup
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Schedule;
