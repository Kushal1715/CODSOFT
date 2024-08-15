import React, { useContext } from "react";
import { TaskList } from "../store/task-list-store";
import { MdDelete } from "react-icons/md";

const IncompletedTasks = () => {
  const { taskList, deleteTask } = useContext(TaskList);

  const IncompletedTasks = taskList.filter(
    (task) => task.status === "Incompleted"
  );
  return (
    <>
      {IncompletedTasks.length === 0 ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold">The list is empty</h1>
        </div>
      ) : (
        <div className="grid grid-cols-3">
          {IncompletedTasks.map((list, index) => {
            return (
              <div className="border-2 border-slate-400 m-2 p-3" key={index}>
                <div className="mb-4">
                  <h1 className="text-2xl font-bold mb-2 break-words">
                    {list.title}
                  </h1>
                  <p className="text-[18px] break-words">{list.desc}</p>
                </div>
                <div className="flex items-center gap-8">
                  <div>
                    <button
                      className="bg-orange-400
               px-4 py-2 rounded-xl"
                    >
                      {list.status}
                    </button>
                  </div>

                  <div className="text-2xl">
                    <MdDelete
                      className="cursor-pointer"
                      onClick={() => deleteTask(list.id, list.status)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default IncompletedTasks;
