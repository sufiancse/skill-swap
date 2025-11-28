import axios from "axios";
import { useEffect, useState } from "react";

const useSkillsData = () => {
  const [skills, setSkills] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    axios
      .get("/skillsData.json")
      .then((res) => {
        setTimeout(() => {
          setSkills(res.data);
          setLoad(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setLoad(false);
      });
  }, []);
  return { skills, load };
};
export default useSkillsData;
