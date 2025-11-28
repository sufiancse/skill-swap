import React, { use } from "react";
import TopRatedProvidersCard from "./TopRatedProvidersCard";

const providersData = fetch("/providersData.json").then((res) => res.json());
const TopRatedProviders = () => {
  const providers = use(providersData);
  return (
    <div>
      <div className="bg-gray-900 py-12">
        <h2 className="text-center text-white text-3xl font-bold mb-2">
          Top Rated Providers
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Meet our most trusted and highly rated professionals
        </p>

        <div className="flex flex-wrap justify-center gap-8 px-4">
          {providers.map((pro, i) => (
            <TopRatedProvidersCard key={i} pro={pro} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatedProviders;
