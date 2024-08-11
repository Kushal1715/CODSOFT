import React, { useContext } from "react";
import { TaskList } from "../store/task-list-store";
import TaskCard from "../components/TaskCard";

const IncompletedTasks = () => {
  const { taskList } = useContext(TaskList);

  const IncompletedTasks = taskList.filter(
    (task) => task.status === "Incompleted"
  );
  return (
    <>
      <div className="grid grid-cols-3">
        {IncompletedTasks.map((list, index) => {
          return (
            <TaskCard
              key={index}
              id={list.id}
              title={list.title}
              desc={list.desc}
              status={list.status}
            />
          );
        })}
      </div>
    </>
  );
};

export default IncompletedTasks;
