import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPassword";
import SkillDetails from "../pages/SkillDetails";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import AllSkills from "../pages/AllSkills";
import AboutUs from "../components/AboutUs";
import Support from "../pages/Support";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-skills",
        Component: AllSkills,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        Component: Signup,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/forget-password",
        Component: ForgetPassword,
      },
      {
        path: "/skill-details/:id",
        element: <SkillDetails></SkillDetails>,
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/support",
        Component: Support,
      },
    ],
  },
]);
