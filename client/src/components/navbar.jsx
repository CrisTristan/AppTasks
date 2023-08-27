import {Link} from "react-router-dom"
export function Navbar(){

     return(
       <div className="bg-zinc-700 flex justify-between px-3 py-5 text-white">
        <Link to={"/"}>
       <h1>React y MySql</h1>
        </Link> 
       <ul className="flex justify-between">
          <li className="bg-slate-500 p-2 mx-5">
            <Link to="/">Pagina principal</Link>        
          </li>
          <li className="bg-slate-500 p-2 mx-5">
          <Link to="/new">Crear Tarea</Link>        
          </li>
       </ul>       
       </div>
     )     
}