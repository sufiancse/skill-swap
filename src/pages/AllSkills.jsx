
import useSkillsData from "../customHooks/useSkillsData";
import PopularSkillsCard from "../components/PopularSkillsCard";
import Loading from "../components/Loading";

const AllSkills = () => {
  const { skills ,load} = useSkillsData();
  if(load){
    return <Loading></Loading>
  }

  return (
    <div className="container mx-auto mb-12">
        <title>SkillSwap | All Skills</title>
      <h1 className="text-center text-3xl text-text-primary font-bold mt-6">
        Popular Skills
      </h1>
      <p className="text-center text-gray-500 mt-2 mb-8">Explore the most in-demand skills offered by our top community members.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
        {skills.map((skill) => (
          <PopularSkillsCard key={skill.skillId} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
