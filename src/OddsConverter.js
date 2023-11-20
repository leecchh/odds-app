import React, { useState, useEffect } from 'react';
// import './odds.css';

const OddsConverter = () => {
  const [value, setValue] = useState(100);

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (newValue >= 100 || newValue <= -100) {
      setValue(newValue);
    }
  };

  const calculatePercentage = (value) => {
    if (value < 0) {
      return (-100 * value / (-value + 100)).toFixed(2);
    } else {
      return (10000 / (100 + value)).toFixed(2);
    }
  };

  // Ensure that the value is within the allowed range when the component mounts
  useEffect(() => {
    if (value > -100 && value < 100) {
      setValue(100);
    }
  }, []);

  return (
    <div>
      <input
        type="range"
        min="-1000"
        max="1000"
        value={value}
        onChange={handleSliderChange}
        step="1"
      />
      <p>Odds Value: {value}</p>
      <p>Percentage: {calculatePercentage(value)}%</p>
    </div>
  );
};

export default OddsConverter;
