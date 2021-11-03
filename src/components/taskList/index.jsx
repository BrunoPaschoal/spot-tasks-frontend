import React from 'react';
import { Skeleton } from "@chakra-ui/react";
import { TaskItem } from '../../components/taskItem';

export const TaskList = ({tasks, isLoading, getTask, taskType}) => {
    if (isLoading) {
        return (
            <>
                <Skeleton height="45px" borderRadius='3px' mb='7px' startColor="#DADADA" endColor="#E8E8E8" mt='5px'/>
                <Skeleton height="45px" borderRadius='3px' mb='7px' startColor="#DADADA" endColor="#E8E8E8"/>
                <Skeleton height="45px" borderRadius='3px' mb='7px' startColor="#DADADA" endColor="#E8E8E8"/>
            </>
        )        
    }

    if (tasks.length > 0) {
        return (
            tasks.map((task, index) => (   
                <TaskItem
                    key={index}
                    taskId={task._id}
                    taskDescription={task.description}
                    isComplete={task.isDone}
                    getTask={getTask}                            
                />                
            ))
        )   
    }

    if (taskType === 'toDo') {
        return (
            <h1>Nenhuma tarefa pra fazer</h1>
        )
    }

    if (taskType === 'done') {
        return (
            <h1>Nenhuma tarefa completa</h1>
        )
    }
}
