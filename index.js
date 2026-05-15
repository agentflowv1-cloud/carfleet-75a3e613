import React from 'react';
import ReactDOM from 'react-dom';
import CarFleetCard from './CarFleetCard';

const App = () => {
  const handleCardClick = () => {
    console.log('Card clicked');
  };

  return (
    <div>
      <CarFleetCard
        image="https://via.placeholder.com/300"
        description="This is a car description"
        price={100}
        onClick={handleCardClick}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));