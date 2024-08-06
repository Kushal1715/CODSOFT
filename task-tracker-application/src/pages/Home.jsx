import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-2 flex h-screen">
      <div className="w-1/6 border-2 border-black p-2">
        <Sidebar />
      </div>
      <div className="w-5/6 border-2 border-black p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
