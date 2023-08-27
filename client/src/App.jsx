import {Routes, Route} from "react-router-dom";
import './App.css'
import { TaskPage } from "./components/TaskPage";
import {TaskForm}  from "./components/taskForm";
import { NotFound } from "./components/notFound";
import { Navbar } from "./components/navbar";
import  TaskContextProrvider  from "./components/TaskContext";
function App() {

  return (

    <div className="bg-zinc-800 h-screen">
    <Navbar/>
      <div className="container mx-auto py-4">
    <TaskContextProrvider>
    <Routes>
      <Route path="/" element={<TaskPage/>}/>
      <Route path="/new" element={<TaskForm/>}/>
      <Route path="/edit/:id" element={<TaskForm/>}/>
      <Route path="*" element={<NotFound/>}/> 
    </Routes>
    </TaskContextProrvider>


      </div>
    </div>
  )
}

export default App
