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
        <div className="grid grid-cols-3">
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
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Task list is empty</h1>
          <button
            className="px-4 py-2 bg-black text-white"
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
