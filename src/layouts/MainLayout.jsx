import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <div className="flex-1 bg-gray-50">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
// bg-linear-to-r from-indigo-50 to-pink-50
