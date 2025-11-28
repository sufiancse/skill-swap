import React from "react";
import PopularSkills from "../components/PopularSkills";
import HeroBanner from "../components/HeroBanner";
import TopRatedProviders from "../components/TopRatedProviders";
import HowItWorks from "../components/HowItWorks";
import TestimonialsSection from "../components/TestimonialsSection ";
import useSkillsData from "../customHooks/useSkillsData";
import Loading from "../components/Loading";

const Home = () => {
  const {load} = useSkillsData()
  if(load){
    return <Loading/>
  }
  return (
    <>
    <title>SkillSwap | Home</title>
      <div className="container mx-auto p-5 md:py-10">
        <HeroBanner />
        <PopularSkills />
      </div>
      <TopRatedProviders />
      <HowItWorks />
      <TestimonialsSection />
    </>
  );
};

export default Home;
