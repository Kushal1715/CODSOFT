import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import { MdIncompleteCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("/");
  const tasks = [
    {
      name: "All tasks",
      icon: <FaTasks />,
      route: "/",
    },
    {
      name: "Add new task",
      icon: <FaPlusCircle />,
      route: "/addTask",
    },
    {
      name: "Completed tasks",
      icon: <TiTickOutline />,
      route: "/completedTasks",
    },
    {
      name: "Incompleted tasks",
      icon: <MdIncompleteCircle />,
      route: "/incompletedTasks",
    },
  ];

  const toggleActive = (route) => {
    setActive(route);
  };
  return (
    <div className="">
      <div className="mb-[100px]">
        <h1 className="text-3xl font-bold border-b-2 border-black pb-1">
          Task Tracker Application
        </h1>
      </div>
      <div className="">
        {tasks.map((task) => {
          return (
            <Link
              key={task.route}
              to={task.route}
              className={`flex justify-start items-center gap-2 mb-3 py-2 cursor-pointer ${
                task.route === active
                  ? "bg-black text-white"
                  : "bg-slate-300 text-black"
              }`}
              onClick={() => toggleActive(task.route)}
            >
              <div>{task.icon}</div>
              <div>{task.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
