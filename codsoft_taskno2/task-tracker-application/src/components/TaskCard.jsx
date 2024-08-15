import React, { useContext } from "react";
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
  const { deleteTask, changeStatus } = useContext(TaskList);

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
    <tbody className="text-[20px]">
      <tr className="border-b hover:bg-gray-50 transition">
        <td className="px-4 py-3 max-w-32 break-words">{title}</td>
        <td className="px-4 py-3 max-w-xs break-words">{desc}</td>
        <td className="px-4 py-3">
          <span
            className={`px-5 py-3 rounded-full cursor-pointer text-white ${
              status === "Incompleted" ? "bg-orange-400" : "bg-green-400"
            }`}
            onClick={() => handleStatus(id, status)}
          >
            {status}
          </span>
        </td>
        <td className="px-4 py-3 flex items-center space-x-2">
          <FaEdit
            className="text-blue-500 cursor-pointer"
            onClick={() => handleUpdate(id, title, desc)}
            size={25}
          />
          <MdDelete
            className="text-red-500 cursor-pointer"
            onClick={() => deleteTask(id, status)}
            size={25}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default TaskCard;
