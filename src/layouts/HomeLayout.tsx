import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router";
import { Toaster } from 'react-hot-toast';

const HomeLayout = () => {
  return (
    <div>
      <Toaster position="top-center" />
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
