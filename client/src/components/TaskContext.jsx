import { createContext, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequest,
  getTasksRequest,
  updateTaskRequest,
} from "../API/task.api";

export const TaskContext = createContext(); //Creamos Contexto

// eslint-disable-next-line react/prop-types
const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const response = await getTasksRequest();
    console.log(response.data);
    setTasks(response.data);
  }

  const deleteTasks = async (id) => {
    try {
      const response1 = await deleteTaskRequest(id);
      console.log(response1.data);
      const arr = tasks.filter((task) => task.id != id);
      setTasks(arr);
    } catch (err) {
      console.log(err);
    }
  };

  const createTask = async (task) => {
    try {
      const response1 = await createTaskRequest(task);
      console.log(response1.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getTask = async (id) => {
    try {
      const response1 = await getTaskRequest(id);
      return response1.data;
    } catch (err) {
      console.log(err);
    }
  };

  const updateTask = async (id,newTask) => {
    try {
      const task = {
          title: newTask.title,
          description: newTask.description
      }
      const response1 = await updateTaskRequest(id, task);
      console.log(response1);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleTaskDone = async (id, done) => {
    try {
        const task = {
            done: done
        }
      const res = await updateTaskRequest(id, task);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, loadTasks, deleteTasks, createTask, getTask, updateTask, toggleTaskDone }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
