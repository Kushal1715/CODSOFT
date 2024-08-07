import React, { useContext, useState } from "react";
import TaskCard from "./TaskCard";
import { TaskList } from "../store/task-list-store";
import InputBox from "./InputBox";

import { MdOutlineClose } from "react-icons/md";

const Tasks = () => {
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
      ) : (
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
      )}
    </>
  );
};

export default Tasks;
