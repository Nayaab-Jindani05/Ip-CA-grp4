import React, { useState } from 'react';
import backgroundImage from '../assets/images/donationpage.jpg'; // Ensure the path to the image is correct

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
    <div style={styles.backgroundContainer}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Schedule Pickup</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Select Pickup Date:
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Select Pickup Time:
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          <button type="submit" style={styles.button}>
            Schedule Pickup
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  backgroundContainer: {
    height: '100vh',
    //background: 'url(${backgroundImage}) no-repeat center center', // Corrected background image reference
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    maxWidth: '450px',
    width: '100%',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    textAlign: 'left',
    fontSize: '16px',
    color: '#555',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    width: '100%',
    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: 'white',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  message: {
    marginTop: '20px',
    color: '#2e7d32',
    fontWeight: 'bold',
  }
};

export default Schedule;
