import React from "react";
import { Range } from "react-range";

const PriceRangeFilter = ({ priceRange, onPriceChange }) => {
  // Handler for slider change
  const handleRangeChange = (values) => {
    onPriceChange(values); // Update parent state
  };

  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Price</h3>
      <div className="flex justify-between items-center mb-4">
        {/* From Input */}
        <div className="flex items-center border-2 border-gray-200 p-2 rounded-lg px-4">
          <label className="text-sm text-gray-500 mr-2">From:</label>
          <span className="text-gray-700 font-semibold">${priceRange[0]}</span>
        </div>

        <span className="text-xl">-</span>

        {/* Up To Input */}
        <div className="flex items-center border-2 border-gray-200 p-2 rounded-lg px-4">
          <label className="text-sm text-gray-500 mr-2">Up to:</label>
          <span className="text-gray-700 font-semibold">${priceRange[1]}</span>
        </div>
      </div>

      {/* Price Range Slider */}
      <div className="px-4">
      <Range
        step={1}
        min={10}
        max={200}
        values={priceRange}
        onChange={handleRangeChange}
        renderTrack={({ props, children }) => (
          <div {...props} className="w-full h-2 bg-gray-200 rounded relative">
            <div
              className="absolute h-2 bg-orange-500 rounded"
              style={{
                left: `${((priceRange[0] - 10) / 190) * 100}%`,
                right: `${100 - ((priceRange[1] - 10) / 190) * 100}%`,
              }}
            />
            {children}
          </div>
        )}
        renderThumb={({ props, index }) => (
          <div
            {...props}
            className="h-4 w-4 bg-orange-500 rounded-full cursor-pointer shadow-md"
          >
            <span className="absolute -top-8 text-sm text-white font-medium bg-black p-1 shadow rounded">
              ${priceRange[index]}
            </span>
          </div>
        )}
      />
      </div>
    </div>
  );
};

export default PriceRangeFilter;
