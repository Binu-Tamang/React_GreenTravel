import React from "react";
import ProgressBar from "../progress-bar/ProgressBar";
import { FaStar } from "react-icons/fa";

const CardComponent = ({ rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-green-100 p-4 pb-0">
        <div className="flex flex-wrap align-center bg-green-100">
          <div className="w-full md:w-4/12">
            <div className="block">
              <div className="text-sm font-semibold">Target:</div>
              <div className="text-sm font-semibold">$3,650</div>
            </div>
            <div className="mt-4">
              <div>
                <strong className="text-black text-2xl">15%</strong> <br />{" "}
                <span className="text-xs text-gray-700">
                  of earnings go to dog shelter in Ubud
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-8/12">
            <ProgressBar />
          </div>
        </div>

        {/* <div className="relative mt-1">
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 rounded-full"
              style={{ width: "23%" }}
            ></div>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-sm text-gray-600">
            23% collected
          </div>
        </div> */}
      </div>

      <div className="p-4">
        <div className="mb-4">
          <div className="text-lg font-semibold">
            Silver jewellery making workshop with local silversmith
          </div>
          <div className="text-sm text-gray-600">
            Sukawati &middot; 2h &middot; Craft workshop
          </div>
        </div>

        <div className="flex items-center mb-4">
          <div className="flex items-center mt-2 mb-4">
            <span className="flex ml-1 text-yellow-500 gap-1">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </span>
            <span className="pl-2 text-black-500 font-semibold">4.9</span>
          </div>
        </div>

        <div className="text-lg font-bold">
          $19 <span className="text-sm font-normal">/ person</span>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
