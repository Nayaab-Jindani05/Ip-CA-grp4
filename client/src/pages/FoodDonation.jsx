import React, { useState } from 'react';
import RewardsPage from './RewardsPage';
import './foodDonation.css';

function DonationPage({ addDonationToHistory }) {
  const [donationType, setDonationType] = useState('');
  const [formData, setFormData] = useState({
    foodMadeDate: '',
    foodShelfLife: '',
    foodServingSize: '',
    foodContainsOnionGarlic: '',
    isVeg: '',
    foodDetails: {
      roti: false,
      rice: false,
      sabzi: false,
      dal: false,
    },
    clothingSize: '',
    clothingCondition: '',
    clothingNewOrUsed: '',
    clothingType: '',
    clothingImage: null,
    otherDescription: '',
    otherImage: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [reward, setReward] = useState(null);
  const [previousRewards, setPreviousRewards] = useState([]);

  const handleTypeChange = (e) => {
    const value = e.target.value;
    console.log('Selected donation type:', value); // Log the selected value
    setDonationType(value);
    setFormData((prevData) => ({
      ...prevData,
      foodDetails: { roti: false, rice: false, sabzi: false, dal: false }, // Reset food details
      clothingSize: '',
      clothingCondition: '',
      clothingNewOrUsed: '',
      clothingType: '',
      clothingImage: null,
      otherDescription: '',
      otherImage: null,
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        foodDetails: { ...prevData.foodDetails, [name]: checked },
      }));
    } else if (type === 'file') {
      setFormData((prevData) => ({ ...prevData, [name]: e.target.files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const donationData = {
      donationType,
      foodDetails: formData.foodDetails,
      foodServingSize: formData.foodServingSize,
      foodShelfLife: formData.foodShelfLife,
      isVeg: formData.isVeg,
      otherDescription: formData.otherDescription,
    };

    console.log('Donation Data Submitted:', donationData);
    addDonationToHistory(donationData);

    // Reward logic
    const newReward = {
      title: '10% Off Coupon',
      description: 'Use this coupon to get 10% off your next purchase at our store.',
      code: 'THANKYOU10',
    };

    setPreviousRewards((prev) => [...prev, newReward]);
    setReward(newReward);
    setSubmitted(true);
  };

  if (submitted) {
    return <RewardsPage reward={reward} previousRewards={previousRewards} />;
  }

  return (
    <div className="container">
      <h1>Donate to Goodwill</h1>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label>
            <input
              type="radio"
              value="food"
              checked={donationType === 'food'}
              onChange={handleTypeChange}
              onClick={() => console.log('Food radio clicked')} // Debug log
            />
            Food
          </label>
          <label>
            <input
              type="radio"
              value="clothes"
              checked={donationType === 'clothes'}
              onChange={handleTypeChange}
              onClick={() => console.log('Clothes radio clicked')} // Debug log
            />
            Clothes
          </label>
          <label>
            <input
              type="radio"
              value="other"
              checked={donationType === 'other'}
              onChange={handleTypeChange}
              onClick={() => console.log('Other radio clicked')} // Debug log
            />
            Other
          </label>
        </div>

        {donationType === 'food' && (
          <>
            <input
              type="date"
              name="foodMadeDate"
              value={formData.foodMadeDate}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="text"
              name="foodShelfLife"
              value={formData.foodShelfLife}
              onChange={handleChange}
              required
              placeholder="Shelf Life"
              className="input"
            />
            <input
              type="text"
              name="foodServingSize"
              value={formData.foodServingSize}
              onChange={handleChange}
              required
              placeholder="Serving Size"
              className="input"
            />
            <input
              type="text"
              name="foodContainsOnionGarlic"
              value={formData.foodContainsOnionGarlic}
              onChange={handleChange}
              required
              placeholder="Contains Onion/Garlic?"
              className="input"
            />
            <select
              name="isVeg"
              value={formData.isVeg}
              onChange={handleChange}
              required
              className="input"
            >
              <option value="">Select...</option>
              <option value="veg">Vegetarian</option>
              <option value="nonveg">Non-Vegetarian</option>
            </select>
            <div className="checkboxGroup">
              <label>
                <input
                  type="checkbox"
                  name="roti"
                  checked={formData.foodDetails.roti}
                  onChange={handleChange}
                />
                Roti
              </label>
              <label>
                <input
                  type="checkbox"
                  name="rice"
                  checked={formData.foodDetails.rice}
                  onChange={handleChange}
                />
                Rice
              </label>
              <label>
                <input
                  type="checkbox"
                  name="sabzi"
                  checked={formData.foodDetails.sabzi}
                  onChange={handleChange}
                />
                Sabzi
              </label>
              <label>
                <input
                  type="checkbox"
                  name="dal"
                  checked={formData.foodDetails.dal}
                  onChange={handleChange}
                />
                Dal
              </label>
            </div>
          </>
        )}

        {donationType === 'clothes' && (
          <>
            <input
              type="text"
              name="clothingSize"
              value={formData.clothingSize}
              onChange={handleChange}
              required
              placeholder="Clothing Size"
              className="input"
            />
            <input
              type="text"
              name="clothingCondition"
              value={formData.clothingCondition}
              onChange={handleChange}
              required
              placeholder="Clothing Condition"
              className="input"
            />
            <input
              type="text"
              name="clothingNewOrUsed"
              value={formData.clothingNewOrUsed}
              onChange={handleChange}
              required
              placeholder="New or Used?"
              className="input"
            />
            <input
              type="text"
              name="clothingType"
              value={formData.clothingType}
              onChange={handleChange}
              required
              placeholder="Type of Clothing"
              className="input"
            />
            <input
              type="file"
              name="clothingImage"
              onChange={handleChange}
              accept="image/*"
              required
              className="input"
            />
          </>
        )}

        {donationType === 'other' && (
          <>
            <input
              type="text"
              name="otherDescription"
              value={formData.otherDescription}
              onChange={handleChange}
              required
              placeholder="Description of the item"
              className="input"
            />
            <input
              type="file"
              name="otherImage"
              onChange={handleChange}
              accept="image/*"
              required
              className="input"
            />
          </>
        )}

        <button
          type="submit"
          className="button"
          onClick={() => console.log('Submit button clicked')} // Debug log
        >
          Submit Donation
        </button>
      </form>
    </div>
  );
}

export default DonationPage;
