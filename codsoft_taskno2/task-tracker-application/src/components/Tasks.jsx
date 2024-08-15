import React, { useContext, useState } from "react";
import TaskCard from "./TaskCard";
import { TaskList } from "../store/task-list-store";
import InputBox from "./InputBox";

import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const navigate = useNavigate();
  const { taskList } = useContext(TaskList);
  const [openInput, setOpenInput] = useState(false);
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDesc, setUpdateDesc] = useState("");
  const [updateId, setUpdateId] = useState(null);
  return (
    <>
      {openInput ? (
        <div>
          <MdOutlineClose
            className="absolute top-[188px] right-[430px] cursor-pointer text-4xl"
            onClick={() => setOpenInput(false)}
          />
          <InputBox
            openInput={openInput}
            updateId={updateId}
            updateTitle={updateTitle}
            updateDesc={updateDesc}
            setUpdateTitle={setUpdateTitle}
            setUpdateDesc={setUpdateDesc}
          />
        </div>
      ) : taskList.length ? (
        <div className="overflow-x-auto mt-4">
          <h1 className=" text-4xl mb-4 flex justify-center items-center font-bold">
            Task List
            <span className="text-2xl text-gray-500">{`(${taskList.length})`}</span>
          </h1>
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100 border-b ">
              <tr>
                <th className="px-4 py-2 text-left text-2xl font-medium text-gray-600">
                  Title
                </th>
                <th className="px-4 py-2 text-left text-2xl font-medium text-gray-600">
                  Description
                </th>
                <th className="px-4 py-2 text-left text-2xl font-medium text-gray-600">
                  Status
                </th>
                <th className="px-4 py-2 text-left text-2xl font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>

            {taskList.map((list, index) => {
              return (
                <TaskCard
                  key={index}
                  id={list.id}
                  title={list.title}
                  desc={list.desc}
                  status={list.status}
                  setOpenInput={setOpenInput}
                  setUpdateTitle={setUpdateTitle}
                  setUpdateDesc={setUpdateDesc}
                  setUpdateId={setUpdateId}
                />
              );
            })}
          </table>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Task list is empty</h1>
          <button
            className="px-4 py-2 bg-blue-600 text-white"
            onClick={() => navigate("/addTask")}
          >
            Add new task
          </button>
        </div>
      )}
    </>
  );
};

export default Tasks;
