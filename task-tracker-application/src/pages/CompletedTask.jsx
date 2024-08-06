import React, { useContext } from "react";
import { TaskList } from "../store/task-list-store";
import TaskCard from "../components/TaskCard";

const CompletedTask = () => {
  const { taskList } = useContext(TaskList);
  const completedTasks = taskList.filter((task) => task.status === "Completed");
  return (
    <>
      <div className="grid grid-cols-3">
        {completedTasks.map((list, index) => {
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

export default CompletedTask;
