import { createContext, useReducer, useState } from "react";

export const TaskList = createContext({
  taskList: [],
  nextId: 0,
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
  changeStatus: () => {},
});

const taskListReducer = (currentTaskList, action) => {
  if (action.type === "delete_task") {
    return currentTaskList.filter((task) => task.id !== action.payload.listId);
  }
  if (action.type === "add_task") {
    return [action.payload, ...currentTaskList];
  }
  if (action.type === "update_task") {
    return currentTaskList.map((task) =>
      task.id === action.payload.id
        ? { ...task, title: action.payload.title, desc: action.payload.desc }
        : task
    );
  }
  if (action.type === "change_status") {
    return currentTaskList.map((task) =>
      task.id === action.payload.id
        ? { ...task, status: action.payload.status }
        : task
    );
  }
  return currentTaskList;
};

const TaskListProvider = ({ children }) => {
  const [taskList, dispatch] = useReducer(taskListReducer, []);
  const [nextId, setNextId] = useState(1);

  const addTask = (id, title, desc, status) => {
    console.log(id, title, desc, status);
    dispatch({
      type: "add_task",
      payload: {
        id,
        title,
        desc,
        status,
      },
    });
    setNextId(id + 1);
  };

  const updateTask = (id, title, desc) => {
    console.log(id, title, desc);
    dispatch({
      type: "update_task",
      payload: {
        id,
        title,
        desc,
      },
    });
  };

  const deleteTask = (listId) => {
    dispatch({
      type: "delete_task",
      payload: {
        listId,
      },
    });
  };

  const changeStatus = (id, status) => {
    dispatch({
      type: "change_status",
      payload: {
        id,
        status,
      },
    });
  };
  return (
    <TaskList.Provider
      value={{
        taskList,
        nextId,
        addTask,
        updateTask,
        deleteTask,
        changeStatus,
      }}
    >
      {children}
    </TaskList.Provider>
  );
};

export default TaskListProvider;
