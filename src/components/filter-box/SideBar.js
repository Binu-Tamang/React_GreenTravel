import React, { useState } from "react";
// If the file is named "pricerange.js"
import PriceRange from './PriceDetail';

const FilterSidebar = () => {
  // State for filters
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [priceRange, setPriceRange] = useState([10, 200]);
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);

  // Data for filters
  const destinations = [
    "Ubud",
    "Kuta",
    "Canggu",
    "Uluwatu",
    "Canada",
    "Nepal",
    "America",
    "Germany",
    "Sanur",
  ];
  const durations = [
    "3h", 
    "3-5 hours", 
    "5-7 hours", 
    "2 days", 
    "3 days", 
    "5 days",
    "1 week",  
    "2 weeks", 
    "1 month", 
    "3 months",
    "6 months",
    "1 year"   
  ];
  
  const services = [
    "Hotel pickup",
    "Small group",
    "Private",
    "Airport transfer", 
    "Guided tour",      
    "Luxury option",    
    "Adventure package" 
  ];
  

  // Handlers
  const handleDestinationChange = (destination) => {
    setSelectedDestinations((prev) =>
      prev.includes(destination)
        ? prev.filter((item) => item !== destination)
        : [...prev, destination]
    );
  };

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
  };

  const handleServiceChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  const handleReset = () => {
    setSelectedDestinations([]);
    setPriceRange([10, 200]);
    setSelectedDuration("");
    setSelectedServices([]);
  };

  return (
    <div className="block w-full h-full p-4 border border-gray-200 shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Filter</h2>
        <button
          onClick={handleReset}
          className="text-orange-500 text-sm font-bold"
        >
          Reset all
        </button>
      </div>

      <div className="py-3">
        <hr />
      </div>

      {/* Destination Filter */}
      <div className="mb-4 max-h-40 overflow-y-auto scrollbar-custom">
        <h3 className="font-semibold mb-2">Destination</h3>
        {destinations.map((destination) => (
          <label key={destination} className="block mb-1">
            <input
              type="checkbox"
              checked={selectedDestinations.includes(destination)}
              onChange={() => handleDestinationChange(destination)}
              className="mr-2 checkbox-orange"
            />
            {destination}
          </label>
        ))}
      </div>

      <div className="py-3">
        <hr />
      </div>

      {/* Price Filter */}
      <PriceRange
        priceRange={priceRange}
        onPriceChange={handlePriceChange}
      />

      <div className="py-3">
        <hr />
      </div>

      {/* Duration Filter */}
      <div className="mb-4 max-h-40 overflow-y-auto scrollbar-custom">
        <h3 className="font-semibold mb-2">Duration</h3>
        {durations.map((duration) => (
          <label key={duration} className="block mb-1">
            <input
              type="checkbox"
              name="duration"
              checked={selectedDuration === duration}
              onChange={() => handleDurationChange(duration)}
              className="mr-2 checkbox-orange"
            />
            {duration}
          </label>
        ))}
      </div>

      <div className="py-3">
        <hr />
      </div>

      {/* Services Filter */}
      <div className="mb-4 max-h-40 overflow-y-auto scrollbar-custom">
        <h3 className="font-semibold mb-2">Services</h3>
        {services.map((service) => (
          <label key={service} className="block mb-1">
            <input
              type="checkbox"
              checked={selectedServices.includes(service)}
              onChange={() => handleServiceChange(service)}
              className="mr-2 checkbox-orange"
            />
            {service}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
