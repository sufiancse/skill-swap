import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import toast from "react-hot-toast";

const Signup = () => {
  const {
    createUserWithEmailPass,
    updateUserProfile,
    setUser,
    googleSignin,
    setLoading,
  } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignin = () => {
    googleSignin()
      .then((result) => {
        setUser(result.user);
        setLoading(false);
        navigate("/");
        toast.success("Login SuccessFul");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const displayName = form.name?.value;
    const photoURL = form.photo?.value;
    const email = form.email?.value;
    const password = form.password?.value;

    const regEx = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!regEx.test(password)) {
      setError(
        "Invalid password! Must contain at least 1 uppercase, 1 lowercase, and be 6+ characters long."
      );
      return;
    } else setError("");

    createUserWithEmailPass(email, password)
      .then(() => {
        updateUserProfile(displayName, photoURL)
          .then(() => {
            navigate("/");
            toast.success("Account Create Successful");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
            toast.error("❌ Invalid email address. Please check your email.");
            break;

          case "auth/email-already-in-use":
            toast.error(
              "📧 This email is already registered. Try logging in instead."
            );
            break;

          case "auth/weak-password":
            toast.error("⚠️ Password too weak. Use at least 6 characters.");
            break;

          default:
            toast.error("⚠️ " + err.message);
        }
      });
  };

  return (
    <div className="flex justify-center items-center p-10">
      <title>SkillSwap | Sign Up</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <div className=" text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary drop-shadow-md">
              SignUp
            </h1>
            <p className="text-gray-500 mt-4 text-sm md:text-base">
              Join SkillSwap and connect with local learners & mentors.
            </p>
          </div>
          <form onSubmit={handleSignUp}>
            <fieldset className="fieldset">
              {/* name field */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input "
                placeholder="Enter Your Name"
                required
              />

              {/* Photo URL Field */}
              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Enter Photo URL"
                required
              />

              {/* Email field */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* password field */}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input relative"
                  placeholder="Password"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-5 top-7 cursor-pointer z-50 text-gray-600"
                >
                  {show ? <FaEye size={20} /> : <IoEyeOff size={20} />}
                </span>
              </div>

              {error && <p className="text-red-600 text-xs">{error}</p>}

              <button className="mt-4 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold px-5 py-2 rounded-md shadow-md cursor-pointer">
                Sign Up
              </button>

              <p className="font-semibold text-lg text-center">or</p>
            </fieldset>
          </form>
          {/* Google */}
          <button
            onClick={handleGoogleSignin}
            className="btn bg-white text-black border-[#e5e5e5]"
            type="button"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p className="text-sm">
            Already have an account?
            <Link
              to={"/login"}
              className="text-primary font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
