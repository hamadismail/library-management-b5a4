import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
