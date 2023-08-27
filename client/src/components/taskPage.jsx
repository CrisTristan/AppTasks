import { useEffect, useContext } from "react";
import { CardTask } from "./cardTask";
import { TaskContext } from "./TaskContext";
export function TaskPage() {
  
  const {tasks, loadTasks} = useContext(TaskContext);

  useEffect(() => {
      loadTasks();
  }, []);

  const handleRender=()=>{
     if(tasks.length === 0){
        return(<div>No tasks yet</div>) 
      } 
     else{
         return( 
           tasks.map(task => (
           <CardTask task={task} key={task.id} />
            ))
         )
     } 
  }

  return (
    <div>
    <h1 className="text-5xl text-white font-bold text-center">Tareas</h1>
    <div className="grid grid-cols-2 gap-3 my-5">
      {
      handleRender()
      }
    </div>
    </div>

  );
}
