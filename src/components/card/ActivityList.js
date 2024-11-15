import React from 'react';
import ActivityCard from './ActivityCard';

const ActivityList = ({ destination, priceRange, duration, services, sortOption }) => {
  // Mock data
  const activities = [
    { title: 'Cooking Class', location: 'Ubud', price: 25, rating: 4.8, points: 32 },
    { title: 'Wood Carving', location: 'Ubud', price: 43, rating: 4.6, points: 27 },
    // Add more mock data
  ];

  return (
    <div className="w-3/4 p-4">
      <h2 className="font-semibold mb-4">31 ecological activities available</h2>
      <div className="grid grid-cols-3 gap-4">
        {activities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivityList;
