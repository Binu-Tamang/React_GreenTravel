import React, { useState } from "react";
import Navbar from "./components/nav-head/header";
import Sidebar from "./components/filter-box/SideBar";
import ActivityCard from "./components/card/ActivityCard";
import CardComponent from "./components/card/CardComponent";

function App() {
  const [destination, setDestination] = useState("");
  const [priceRange, setPriceRange] = useState([10, 200]);
  const [duration, setDuration] = useState("");
  const [services, setServices] = useState([]);

  return (
    <div className="App container mx-auto px-4 py-6 w-full">
      <div className="min-h-screen">
        <Navbar />
        <div className="flex justify-between py-6 mx-4">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-4">
              <Sidebar
                destination={destination}
                setDestination={setDestination}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                duration={duration}
                setDuration={setDuration}
                services={services}
                setServices={setServices}
              />
            </div>
            <div className="col-span-8">
              <div className="block w-full">
                <div className="flex justify-between items-center mb-4">
                  <strong className="text-gray-800">
                    31 ecological activities available
                  </strong>
                  <div className="flex items-center gap-1">
                    <label
                      htmlFor="sortBy"
                      className="text-gray-600 font-semibold"
                    >
                      Sort By:
                    </label>
                    <select
                      id="sortBy"
                      defaultValue="best match"
                      className="p-1 font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500"
                      aria-label="Sort activities"
                    >
                      <option value="best match">Best Match</option>
                      <option value="price">Price</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <ActivityCard
                  title="Authentic Balinese Cooking Class in a Local Village"
                  location="Ubud"
                  time="2h"
                  category="Cooking Class"
                  price="25"
                  rating="4.8"
                  points="32"
                  image="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <CardComponent />

                <ActivityCard
                  title="Wood Carving Master Class"
                  location="Ubud"
                  time="3h"
                  category="Craft Workshop"
                  price="43"
                  rating="4.6"
                  points="27"
                  image="https://images.pexels.com/photos/15772948/pexels-photo-15772948/free-photo-of-man-carving-on-wood-with-tools.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <ActivityCard
                  title="Canggu Puppy Yoga Class with Refreshing Drinks"
                  location="Denpasar"
                  time="1.5h"
                  category="Dance Workshop"
                  price="20"
                  rating="4.7"
                  points="24"
                  image="https://images.pexels.com/photos/29127727/pexels-photo-29127727/free-photo-of-adorable-shih-tzu-puppy-playing-with-toy.jpeg"
                />
                <ActivityCard
                  title="Introduction to Balinese Culture and Daily Life"
                  location="Gianyar"
                  time="2.5h"
                  category="Art Workshop"
                  price="35"
                  rating="4.8"
                  points="28"
                  image="https://images.pexels.com/photos/14526226/pexels-photo-14526226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <ActivityCard
                  title="Batik Class with Transfer"
                  location="Kerobokan"
                  time="3h"
                  category="Craft Workshop"
                  price="40"
                  rating="4.5"
                  points="22"
                  image="https://images.pexels.com/photos/2422574/pexels-photo-2422574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
