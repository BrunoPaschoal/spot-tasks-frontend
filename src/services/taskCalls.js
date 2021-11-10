import axios from './api';

export async function deleteTaskById (taskId){
    await axios.delete(`/task/${taskId}`)
}

export async function updateTaskStatusById(taskId, isComplete){
    const taskStatusChanged = !isComplete
    await axios.put(`/task/${taskId}`,{
        isDone: taskStatusChanged
    })
}

export async function updateTaskDataById(taskId, payload){
    await axios.put(`/task/${taskId}`, payload)
}

export async function addNewTask (taskDescription, projectId) {
    await axios.post(`/task`, {            
        description: taskDescription,
        createdAt: new Date(),
        projectId: projectId,
        isDone: false            
    })
}

export async function getTasksByProjectId(projectId){
    const response = await axios.get(`/task/${projectId}`)     
    return response.data;
}

export async function getTaskById(id){
    const response = await axios.get(`/task/unique/${id}`)     
    return response.data;
} 