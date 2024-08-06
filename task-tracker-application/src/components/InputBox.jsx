import React, { useContext, useRef } from "react";
import { TaskList } from "../store/task-list-store";

const InputBox = ({ updateTitle, updateDesc }) => {
  const { addTask, updateTask } = useContext(TaskList);
  const title = useRef();
  const desc = useRef();
  let id = 0;

  const addTitle = (e) => {
    id += 1;
    e.preventDefault();
    let taskTitle = title.current.value;
    let taskDesc = desc.current.value;
    addTask(id, taskTitle, taskDesc, "Incompleted");

    title.current.value = "";
    desc.current.value = "";
  };

  const handleUpdateTask = (e) => {
    e.preventDefault();
    let taskTitle = title.current.value;
    let taskDesc = desc.current.value;
    updateTask(taskTitle, taskDesc);
  };
  return (
    <div className="w-full h-[94vh] flex flex-col justify-center items-center ">
      <h1 className="text-3xl mb-4 text-black font-bold underline">
        {updateTitle ? "Update" : "Add new"} task:
      </h1>
      <form className="border-2 border-black p-4 flex flex-col">
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="mb-4 px-3 py-2 rounded bg-slate-800 text-white"
          ref={title}
          value={updateTitle}
          onChange={() => {}}
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
          onChange={() => {}}
        ></textarea>
        {updateTitle ? (
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
