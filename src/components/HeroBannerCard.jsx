import React from "react";
import 'animate.css'

const HeroBannerCard = ({ slide }) => {
  return (
    <div
      className="relative h-[80vh]  bg-center bg-cover rounded-2xl overflow-hidden"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-6 space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg animate__animated  animate__backInDown animate__slow">
          {slide.title}
        </h1>
        <p className="max-w-2xl text-sm md:text-lg text-gray-200 animate__animated animate__slow animate__backInLeft">
          {slide.text}
        </p>
        <button className="mt-5 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold px-5 py-2 rounded-md shadow-md  hover:scale-105 transition-all duration-300 animate__animated animate__slow animate__backInUp">
          {slide.button}
        </button>
      </div>
    </div>
  );
};

export default HeroBannerCard;
