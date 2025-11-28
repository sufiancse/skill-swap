import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-out-cubic" });
  }, []);
  return (
    <div className="container mx-auto p-5 py-12">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
        <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
          Our process is simple, fast, and user-friendly. Follow these steps and
          get started immediately.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="bg-white rounded-3xl shadow-xl p-8 hover:scale-105 transform transition duration-300 relative"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              1
            </div>
            <div className="mt-14">
              <h3 className="text-2xl font-bold mb-3">Sign Up</h3>
              <p className="text-gray-600 mb-5">
                Create your free account in seconds and gain instant access to
                our platform.
              </p>
              <button className="bg-purple-500 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:scale-105 transition transform">
                Get Started
              </button>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="bg-white rounded-3xl shadow-xl p-8 hover:scale-105
            transform transition duration-300 relative"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              2
            </div>
            <div className="mt-14">
              <h3 className="text-2xl font-bold mb-3">Choose a Plan</h3>
              <p className="text-gray-600 mb-5">
                Select the plan that fits your needs and unlock all premium
                features.
              </p>
              <button className="bg-pink-500 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:scale-105 transition transform">
                Choose Plan
              </button>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="bg-white rounded-3xl shadow-xl p-8 hover:scale-105 transform transition duration-300 relative"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              3
            </div>
            <div className="mt-14">
              <h3 className="text-2xl font-bold mb-3">Enjoy Services</h3>
              <p className="text-gray-600 mb-5">
                Access all features seamlessly and achieve your goals
                efficiently.
              </p>
              <button className="bg-purple-500 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:scale-105 transition transform">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
