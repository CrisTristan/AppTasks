import axios from 'axios';

export const getTasksRequest = async () => {
    return await axios.get('http://localhost:4000/tasks')
        .catch(err => console.log('ocurrio un error al hacer la peticion ' + err))
}

export const createTaskRequest = async (task) => {
    return await axios.post('http://localhost:4000/tasks', task)
        .catch(err => console.log('ocurrio un error al hacer la peticion ' + err));
}

export const deleteTaskRequest = async (id) => {
    return await axios.delete(`http://localhost:4000/tasks/${id}`)
        .catch(err => console.log('ocurrio un error al hacer la peticion ' + err));
}

export const getTaskRequest= async(id)=>{
    return await axios.get('http://localhost:4000/tasks/'+id)
    .catch(err => console.log('ocurrio un error al hacer la peticion ' + err))
}

export const updateTaskRequest = async (id, task)=>{
    return await axios.put(`http://localhost:4000/tasks/${id}`, task)
    .catch(err => console.log('ocurrio un error al hacer la peticion ' + err));
}