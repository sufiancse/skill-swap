import React, { useState } from "react";
import { useParams } from "react-router";
import useSkillsData from "../customHooks/useSkillsData";
import toast, { Toaster } from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import Loading from "../components/Loading";
import NotFound from "./NotFound";

const SkillDetails = () => {
  const { id } = useParams();
  const { skills, load } = useSkillsData();

  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    setFormData({ name: "", email: "" });
  };

  if (load) {
    return <Loading></Loading>
      
  }

  const findSkill = skills.find((s) => s.skillId == id);
  const {
    skillName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = findSkill || {};

  if (!findSkill && !load) return <NotFound></NotFound>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <title>{skillName}</title>
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500 grid grid-cols-1 md:grid-cols-2">

        <div className="relative">
          <img
            src={image}
            alt={skillName}
            className="w-full h-72 md:h-full object-cover"
          />
          <span className="absolute top-4 left-4 bg-linear-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            {category}
          </span>
        </div>

        <div className="p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{skillName}</h2>
            <p className="text-gray-600 mt-3 leading-relaxed">{description}</p>

            <div className="flex items-center justify-between mt-6">
              <div>
                <p className="text-gray-800 font-semibold">{providerName}</p>
                <p className="text-gray-500 text-sm">{providerEmail}</p>
              </div>
              <div className="text-right">
                <p className="text-indigo-600 font-bold text-xl">${price}</p>
                <p className="text-yellow-500 font-semibold flex items-center gap-1">
                  {rating} <FaStar />
                </p>
              </div>
            </div>

            <p className="text-gray-500 mt-2">
              Slots Available:{" "}
              <span className="font-medium">{slotsAvailable}</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-full bg-linear-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold "
            >
              Book Session
            </button>
          </form>
        </div>
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default SkillDetails;
