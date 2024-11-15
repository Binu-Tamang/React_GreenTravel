import React from "react";
import { FaStar } from "react-icons/fa";

const ActivityCard = ({
  title,
  location,
  time,
  category,
  price,
  rating,
  points,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-500">
          {location} • {time} • {category}
        </p>
        <div className="flex items-center mt-2 mb-4">
          <span className="flex ml-1 text-yellow-500 gap-1">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </span>
          <span className="pl-2 text-black-500 font-semibold">{rating}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl">
            <strong className="font-bold text-2xl">${price}</strong>{" "}
            <span className="text-sm">/ person</span>
          </span>
          <span className="text-sm font-semibold text-green-500">
            +{points} points
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
