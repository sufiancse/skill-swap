import React, { useContext, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

const Profile = () => {
  const { user, loading, updateUserProfile } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const [skill, setSkill] = useState("");
  const [bio, setBio] = useState("");

  if (loading) {
    return <Loading></Loading>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const skillValue = e.target.skill.value;
    const bioValue = e.target.bio.value;
    setSkill(skillValue);
    setBio(bioValue);
    try {
      await updateUserProfile(name, photoURL);
      setIsEditing(false);
      toast.success("Profile updated successfully");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    
    <div className="max-w-[500px] mx-5 md:mx-auto  my-10  bg-white p-[54px] shadow-2xl rounded-4xl ">
      <title>SkillSwap | Profile</title>
      <div className="space-y-3 flex flex-col justify-center items-center">
        <figure>
          <img
            src={user?.photoURL}
            alt="Profile Picture"
            className="w-[200px] h-[200px] rounded-full border-2 border-primary object-cover"
          />
        </figure>
        <div className="text-center">
          <h1 className="font-bold text-3xl text-gray-800">
            {user?.displayName}
          </h1>
          <h3 className="text-2xl text-primary/60">
            {skill ? skill : "Add Skill"}
          </h3>
        </div>
        <div>
          <h4 className="px-5 py-3 rounded-full bg-secondary text-white font-medium">
            {user?.email}
          </h4>
        </div>
        <p className="text-xl text-gray-600 text-center">
          {bio ? bio : "Add Bio"}
        </p>

        {isEditing && (
          <div className=" w-full">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label ">Name</label>
                <input
                  type="text"
                  className="input text-gray-600  w-full"
                  placeholder="Enter Your New Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label className="label">Photo-URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input text-gray-600  w-full"
                  placeholder="Paste Photo-URL"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  required
                />

                <label className="label">Skill</label>
                <input
                  type="text"
                  name="skill"
                  className="input text-gray-600  w-full"
                  placeholder="Enter Your Skill"
                />

                <fieldset className="fieldset">
                  <legend className="label">Your Bio</legend>
                  <textarea
                    className="textarea h-24 w-full text-gray-600"
                    placeholder="Bio..."
                    name="bio"
                  ></textarea>
                </fieldset>

                <button className="btn btn-secondary mt-4">Save Changes</button>
              </fieldset>
            </form>
          </div>
        )}

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold px-5 py-2 rounded-md shadow-md cursor-pointer"
        >
          {isEditing ? "Cancel" : "Update Profile"}
        </button>

        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-blue-600">
            <FaGithub size={35} />
          </a>
          <a href="#" className="hover:text-blue-600">
            <FaTwitter size={35} />
          </a>
          <a href="#" className="hover:text-blue-600">
            {" "}
            <FaInstagram size={35} />
          </a>
          <a href="#" className="hover:text-blue-600">
            {" "}
            <FaFacebook size={35} />{" "}
          </a>
          <a href="#" className="hover:text-blue-600">
            {" "}
            <FaLinkedin size={35} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
