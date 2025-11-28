import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialsSectionCard = ({ t }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transform transition duration-300 flex flex-col items-center">
      <img
        src={t.img}
        alt={t.name}
        className="w-20 h-20 rounded-full mb-4 object-cover"
      />
      <h3 className="text-xl font-bold">{t.name}</h3>
      <p className="text-gray-500 text-sm mb-2">{t.role}</p>
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
        <span className="text-gray-600 ml-2">{t.rating}</span>
      </div>
      <p className="text-gray-600 text-sm text-center">{t.comment}</p>
    </div>
  );
};

export default TestimonialsSectionCard;
