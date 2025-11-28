import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

import demoProfile from "/demo-profile.jpg";
import toast from "react-hot-toast";
import { ImCross } from "react-icons/im";
import { RxDropdownMenu } from "react-icons/rx";

const Navbar = () => {
  const { signOutUser, user, setUser, loading } = useContext(AuthContext);
  const [d , setD] = useState(false)
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser();
    setUser(null);
    navigate("/login");
    toast.success("Log Out Successfully.");
  };

  const Links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
          to={"/all-skills"}
        >
          All Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
          to={"/profile"}
        >
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className=" shadow-sm bg-base-100">
      <div className="navbar   container mx-auto ">
        <div className="navbar-start">
          <div onClick={()=>setD(!d)} className="dropdown">
            <div  tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {d?<ImCross size={18}/>:<RxDropdownMenu size={25}/>}
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <Link
            to={"/"}
            className="flex items-center space-x-0.5 text-2xl font-semibold text-text-primary hover:scale-105 transition-all duration-200"
          >
            <span className="text-3xl font-extrabold text-primary drop-shadow-sm">
              S
            </span>
            kill
            <span className="text-3xl font-extrabold text-accent drop-shadow-sm">
              S
            </span>
            wap
          </Link>
        </div>
        <div className="navbar-center hidden z-50 lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end gap-1">
          {loading ? (
            <span className="loading loading-infinity loading-xl"></span>
          ) : user ? (
            <div className="flex items-center gap-3">
              <img
                src={user?.photoURL ? user.photoURL : demoProfile}
                alt={user?.displayName}
                title={user?.displayName || "User"}
                className="w-12 h-12 rounded-full object-cover"
              />
              <button
                onClick={handleSignOut}
                className="bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold px-5 py-2 rounded-md shadow-md cursor-pointer mr-2"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <NavLink
                to={"/login"}
                // className="btn "
                className={({ isActive }) =>
                  isActive
                    ? "bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold px-5 py-2 rounded-md shadow-md"
                    : "btn hover:btn-secondary cursor-pointer"
                }
              >
                Login
              </NavLink>
              <NavLink
                to={"/signup"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold px-5 py-2 rounded-md shadow-md mr-2"
                    : "btn hover:btn-secondary cursor-pointer"
                }
              >
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
