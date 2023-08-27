/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TaskContext } from "./TaskContext";
import { useNavigate } from "react-router-dom";
  
export function CardTask({ task }) {

  const {deleteTasks, toggleTaskDone, loadTasks}=useContext(TaskContext);
  const Navigate = useNavigate();

  const handleDelete = async(id)=>{
    try {
      await deleteTasks(id);
    } catch (err) {
      console.log(err);
    }
  }

  const handleDoneTask = async(id, done)=>{
    try{
       await toggleTaskDone(id, done == 0 ? true : false);
       loadTasks();
    }catch(err){
       console.log(err);
    }
  }

  return (
    <div className="bg-slate-200 rounded-md p-4 font-serif text-xl max-w-xs">
      <div>
      <header className="flex flex-col justify-between">
      <h1 className="font-bold text-center my-5" >{task.title}</h1>
      <span>completed: {task.done == 1 ? "✅" : "❌"}</span>

      </header>
      </div>
      <div className="flex flex-col justify-between my-7">
      <p>{task.description}</p>
      <span className="mt-6 text-center">{task.createAt.slice(0,10)}</span>
      </div>
      <div className="flex justify-between text-white flex-wrap">
      <button className="bg-red-500 rounded-md p-2" onClick={()=> handleDelete(task.id)}>Delete</button>
      <button className="bg-blue-300  rounded-md p-2" onClick={()=> Navigate(`/edit/${task.id}`)}>Edit</button>
      <button className="bg-green-400 rounded-md p-2" onClick={()=> handleDoneTask(task.id, task.done)}>Done</button>
      </div>
    </div>
  );
}
