import React from 'react';
import './CarFleetCard.css';

const CarFleetCard = ({ image, description, price, onClick }) => {
  return (
    <div className="car-fleet-card" onClick={onClick}>
      <img src={image} alt="Car Image" className="car-image" />
      <div className="car-info">
        <p className="car-description">{description}</p>
        <p className="car-price">${price}</p>
      </div>
    </div>
  );
};

export default CarFleetCard;
