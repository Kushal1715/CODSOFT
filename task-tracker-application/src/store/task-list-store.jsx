import { createContext, useReducer } from "react";

export const TaskList = createContext({
  taskList: [],
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
});

const defaultTaskList = [
  {
    id: 1,
    title: "hello",
    desc: "my name is kushal khadka asdfasdfasf asdf lorem24asdfasdfl asdlfasdf asldfasdf the last of title one asdfasdfklasjd fas asldjfkalsdfajlksdfjo awiejq[ewipf v aoisdjf awoefhbvwoiefv ",
    status: "Completed",
  },
  {
    id: 2,
    title: "hello2",
    desc: "i am doing codesoft intern",
    status: "Completed",
  },
  {
    id: 3,
    title: "hello2",
    desc: "i am doing codesoft intern",
    status: "Incompleted",
  },
  {
    id: 4,
    title: "hello2",
    desc: "i am doing codesoft intern",
    status: "Incompleted",
  },
];

const taskListReducer = (currentTaskList, action) => {
  if (action.type === "delete_task") {
    return currentTaskList.filter((task) => task.id !== action.payload.listId);
  }
  if (action.type === "add_task") {
    return [action.payload, ...currentTaskList];
  }
  return currentTaskList;
};

const TaskListProvider = ({ children }) => {
  const [taskList, dispatch] = useReducer(taskListReducer, defaultTaskList);

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
  };

  const updateTask = (title, desc) => {
    console.log(title, desc);
  };

  const deleteTask = (listId) => {
    dispatch({
      type: "delete_task",
      payload: {
        listId,
      },
    });
  };
  return (
    <TaskList.Provider value={{ taskList, addTask, updateTask, deleteTask }}>
      {children}
    </TaskList.Provider>
  );
};

export default TaskListProvider;
