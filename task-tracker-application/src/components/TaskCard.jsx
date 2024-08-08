import React, { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TaskList } from "../store/task-list-store";

const TaskCard = ({
  id,
  title,
  desc,
  status,
  setOpenInput,
  setUpdateTitle,
  setUpdateDesc,
  setUpdateId,
}) => {
  const { deleteTask, taskList, changeStatus } = useContext(TaskList);

  const handleStatus = (id, status) => {
    let newStatus = status === "Incompleted" ? "Completed" : "Incompleted";
    changeStatus(id, newStatus);
  };

  const handleUpdate = (id, title, desc) => {
    setOpenInput(true);
    setUpdateTitle(title);
    setUpdateDesc(desc);
    setUpdateId(id);
  };
  return (
    <>
      <div className="border-2 border-slate-400 m-2 p-3">
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <p className="text-[18px]">{desc}</p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <button
              className={`${
                status === "Incompleted" ? "bg-orange-400" : "bg-green-400"
              }  px-4 py-2 rounded-xl`}
              onClick={() => handleStatus(id, status)}
            >
              {status}
            </button>
          </div>
          <div className="text-2xl">
            <FaEdit
              className="cursor-pointer"
              onClick={() => handleUpdate(id, title, desc)}
            />
          </div>
          <div className="text-2xl">
            <MdDelete
              className="cursor-pointer"
              onClick={() => deleteTask(id, status)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
