import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaSearch,
  FaTools,
  FaBars,
} from "react-icons/fa";
import binuImage from "../../assets/img/binu.jpg";
import burgerMenu from "../../assets/img/menu.png";

function Header() {
  // Defining state for mobile menu toggle
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {/* Header Section */}
      <header className="bg-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={binuImage}
            alt="GreenTravel Logo"
            className="h-10 w-10 rounded-full"
          />
          <h1 className="text-lg font-bold text-gray-800">GreenTravel</h1>
        </div>

        {/* Navigation Tabs */}
        <nav className={`md:flex gap-4 ${isNavOpen ? "block" : "hidden"}`}>
          <button className="px-4 py-2 rounded-lg text-gray-700 border-2 border-gray-200 hover:bg-gray-100">
            Accommodation
          </button>
          <button className="px-4 py-2 rounded-lg text-gray-700 border-2 border-gray-200 hover:bg-gray-100">
            Car Rent
          </button>
          <button className="px-4 py-2 rounded-lg text-gray-700 border-2 border-gray-200 hover:bg-gray-100">
            Train
          </button>
          <button className="px-4 py-2 rounded-lg bg-green-100 font-semibold text-green-700">
            Activities
          </button>
          <button className="px-4 py-2 rounded-lg text-gray-700 border-2 border-gray-200 hover:bg-gray-100">
            Tour
          </button>
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <FaBars
          className="text-gray-600 cursor-pointer md:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)} // Toggling the state
          aria-label="Open menu"
        />

        {/* User Profile Section */}
        <div className="flex items-center gap-2">
          <div className="text-end pr-2">
            <p className="text-gray-700 font-bold">Jakob</p>
            <span className="text-sm text-gray-500 font-semibold">
              320 bonus points
            </span>
          </div>

          <button
            className="flex items-center gap-2 pl-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
            aria-label="Toggle Profile"
          >
            <img
              src={burgerMenu}
              alt="User Avatar"
              className="h-8 w-8 rounded-full p-2"
            />
            <img
              src={binuImage}
              alt="User Avatar"
              className="h-10 w-10 rounded-full bg-orange-200 p-1"
            />
          </button>
        </div>
      </header>

      {/* Search Bar Section */}
      <div className="flex-1 shadow-sm mx-4 flex items-center gap-4 mt-4 bg-gray-100 rounded-lg p-4">
        <div className="flex items-center border rounded-lg bg-white px-4 py-2 w-full">
          <FaMapMarkerAlt className="text-black mr-2" />
          <input
            type="text"
            placeholder="Indonesia, Bali"
            className="w-full outline-none text-black placeholder:text-black"
          />
        </div>

        <div className="flex items-center border rounded-lg bg-white px-4 py-2">
          <FaCalendarAlt className="text-black mr-2" />
          <input
            type="text"
            placeholder="Any date"
            className="outline-none text-black placeholder:text-black"
          />
        </div>

        <div className="flex items-center border rounded-lg bg-white px-4 py-2">
          <FaTools className="text-black mr-2" />
          <select className="outline-none text-black">
            <option>Crafts workshops</option>
            <option>Cooking classes</option>
            <option>Hiking tours</option>
          </select>
        </div>

        <button className="bg-green-800 text-white rounded-lg px-6 py-2 flex items-center">
          <FaSearch className="mr-2" /> Search
        </button>
      </div>
    </>
  );
}

export default Header;
