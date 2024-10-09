import React from 'react';
import CustomScratchCard from './CustomScratchCard';
//import './RewardsPage.css';

function RewardsPage({ reward, previousRewards }) {
  return (
    <div style={styles.rewardsContainer}>
      <h2>Congratulations on your donation!</h2>
      <p>As a token of our appreciation, you have earned the following reward:</p>
      <div className="scratch-card-container">
        <CustomScratchCard reward={reward} />
      </div>
      <h2>Your Previous Rewards</h2>
      <div className="previous-rewards-container">
        {previousRewards.map((prevReward, index) => (
          <div key={index} className="previous-reward">
            <h3>{prevReward.title}</h3>
            <p>{prevReward.description}</p>
            <p><strong>Code:</strong> {prevReward.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  rewardsContainer: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#e0f7fa',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
};

export default RewardsPage;