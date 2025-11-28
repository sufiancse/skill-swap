import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import Loading from "./Loading";

const PopularSkillsCard = ({ skill }) => {
  const { skillName, image, price, rating, skillId } = skill;

  return (
    <div>
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 hover:shadow-3xl w-full max-w-sm mx-auto">
        <div className="relative h-60">
          <img
            src={image}
            alt={skillName}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>

          <span className="absolute top-3 right-3 bg-linear-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
            ${price}
          </span>
        </div>

        <div className="p-5 flex flex-col justify-between h-[180px]">
          <h2 className="text-gray-1000 text-lg md:text-xl font-bold truncate text-gray-900">
            {skillName}
          </h2>

          <div className="flex items-center mt-2 gap-2">
            {[...Array(Math.round(rating))].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
            <span className="text-gray-600 font-medium">{rating}</span>
          </div>

          <Link
            to={`/skill-details/${skillId}`}
            className="mt-4 btn bg-linear-to-r from-purple-500 to-pink-500 text-white py-2 rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-xl transition transform animate__animated animate__infinite animate__headShake animate__slower"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularSkillsCard;
