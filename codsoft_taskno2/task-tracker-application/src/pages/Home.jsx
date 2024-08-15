import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen bg-yellow-50 ">
      <div className="w-1/6 border-2 border-black ">
        <Sidebar />
      </div>
      <div className="w-5/6 border-2 border-black p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
