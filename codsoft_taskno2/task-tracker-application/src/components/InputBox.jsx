import React, { useContext, useRef, useState } from "react";
import { TaskList } from "../store/task-list-store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputBox = ({
  updateId,
  updateTitle,
  updateDesc,
  setUpdateTitle,
  setUpdateDesc,
  openInput,
}) => {
  const { addTask, updateTask, nextId } = useContext(TaskList);
  const [error, setError] = useState(false);
  const title = useRef();
  const desc = useRef();

  const addTitle = (e) => {
    e.preventDefault();
    let taskTitle = title.current.value.trim();
    let taskDesc = desc.current.value.trim();

    if (!taskTitle || !taskDesc) {
      setError(true);
    } else {
      addTask(nextId, taskTitle, taskDesc, "Incompleted");
      title.current.value = "";
      desc.current.value = "";
      toast("task is added to list");
    }
  };

  const handleUpdateTask = (e) => {
    e.preventDefault();
    let taskTitle = title.current.value;
    let taskDesc = desc.current.value;
    updateTask(updateId, taskTitle, taskDesc);
    toast("Your task is updated");
  };
  return (
    <div className="w-full h-[94vh] flex flex-col justify-center items-center ">
      <ToastContainer />
      <h1 className="text-3xl mb-4 text-black font-bold underline">
        {openInput ? "Update" : "Add new"} task:
      </h1>
      <form className="border-2 border-black p-4 flex flex-col">
        {error && (
          <h1 className="text-red-500 text-2xl">
            * Please input all the fields
          </h1>
        )}
        {openInput ? (
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="mb-4 px-3 py-2 rounded bg-slate-800 text-white"
              ref={title}
              value={updateTitle}
              onChange={(e) => setUpdateTitle(e.target.value)}
            />
            <textarea
              name=""
              id=""
              cols="40"
              rows="6"
              placeholder="Description"
              className="px-3 py-2 rounded bg-slate-800 text-white mb-4"
              ref={desc}
              value={updateDesc}
              onChange={(e) => setUpdateDesc(e.target.value)}
            ></textarea>
          </div>
        ) : (
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="mb-4 px-3 py-2 rounded bg-slate-800 text-white"
              ref={title}
            />
            <textarea
              name=""
              id=""
              cols="40"
              rows="6"
              placeholder="Description"
              className="px-3 py-2 rounded bg-slate-800 text-white mb-4"
              ref={desc}
            ></textarea>
          </div>
        )}

        {openInput ? (
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 text-white rounded-xl w-[110px]"
            onClick={handleUpdateTask}
          >
            Update
          </button>
        ) : (
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 text-white rounded-xl w-[110px]"
            onClick={addTitle}
          >
            Add
          </button>
        )}
      </form>
    </div>
  );
};

export default InputBox;
