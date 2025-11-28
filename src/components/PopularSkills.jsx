import React from "react";
import useSkillsData from "../customHooks/useSkillsData";
import PopularSkillsCard from "./PopularSkillsCard";
import Loading from "./Loading";
import { Link } from "react-router";

const PopularSkills = () => {
  const { skills ,load} = useSkillsData();
  if(load){
    return <Loading></Loading>
  }

  return (
    <div>
      <h1 className="text-center text-3xl text-text-primary font-bold mt-10">
        Popular Skills
      </h1>
      <p className="text-center text-gray-500 mt-2 mb-8">Explore the most in-demand skills offered by our top community members.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
        {skills.map((skill) => (
          <PopularSkillsCard key={skill.skillId} skill={skill} />
        ))}
      </div>
      <div className="text-right">
        <Link to={'/all-skills'} className="btn btn-primary mt-6">See All</Link>
      </div>
    </div>
  );
};

export default PopularSkills;
