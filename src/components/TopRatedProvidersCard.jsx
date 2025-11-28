import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

const TopRatedProvidersCard = ({ pro }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-out-cubic" });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="bg-white w-72 rounded-2xl shadow-xl text-center py-6 hover:scale-105 transition duration-300">
        <div className="flex justify-center">
          <img
            src={pro.img}
            alt={pro.name}
            className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md -mt-12"
          />
        </div>

        <h3 className="text-lg font-bold text-blue-600 mt-4">{pro.name}</h3>
        <p className="text-gray-700 mt-1">{pro.role}</p>

        <div className="flex justify-center items-center gap-1 mt-2">
          <FaStar className="text-yellow-400" />
          <span className="font-semibold">{pro.rating}</span>
        </div>

        <button className="mt-5 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold px-5 py-2 rounded-md shadow-md ">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default TopRatedProvidersCard;
