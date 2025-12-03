import { useMemo, useState } from "react";
import useSkillsData from "../customHooks/useSkillsData";
import PopularSkillsCard from "../components/PopularSkillsCard";
import Loading from "../components/Loading";

const AllSkills = () => {
  const { skills, load } = useSkillsData();

  const [sortOption, setSortOption] = useState("priceAsc");
  const [category, setCategory] = useState("All");

  // Category list
  const categories = useMemo(() => {
    return ["All", ...new Set(skills.map((skill) => skill.category))];
  }, [skills]);

  //Filtering + Sorting logic
  const processedSkills = useMemo(() => {
    let data = [...skills];

    // Filter by category
    if (category !== "All") {
      data = data.filter((skill) => skill.category === category);
    }

    // Sorting
    switch (sortOption) {
      case "priceAsc":
        data.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        data.sort((a, b) => b.price - a.price);
        break;
      case "ratingDesc":
        data.sort((a, b) => b.rating - a.rating);
        break;
      case "ratingAsc":
        data.sort((a, b) => a.rating - b.rating);
        break;
      default:
        break;
    }

    return data;
  }, [skills, category, sortOption]);

  if (load) return <Loading />;

  return (
    <div className="container mx-auto mb-12 px-4">
      <title>SkillSwap | All Skills</title>

      <h1 className="text-center text-3xl font-bold mt-8">All Skills</h1>
      <p className="text-center text-gray-500 mt-2 mb-8">
        Discover skills, compare prices and learn from experts
      </p>

      {/* ✅ Filter & Sort Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        {/* Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="priceAsc">Price: Low → High</option>
          <option value="priceDesc">Price: High → Low</option>
          <option value="ratingDesc">Rating: High → Low</option>
          <option value="ratingAsc">Rating: Low → High</option>
        </select>
      </div>

      {/* ✅ Cards */}
      {processedSkills.length === 0 ? (
        <p className="text-center text-gray-500 mt-16">No skills found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {processedSkills.map((skill) => (
            <PopularSkillsCard key={skill.skillId} skill={skill} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllSkills;
