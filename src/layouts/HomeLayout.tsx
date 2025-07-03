import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Toaster position="top-center" />
      <Navbar />
      <div className="min-h-[calc(100vh-162px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
