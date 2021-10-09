import React, {useState, useEffect} from 'react';
import {Background, Container, TitleContainer, TaskListContainer} from './styles';
import { Header } from '../../components/header';
import { TaskItem } from '../../components/taskItem';
import {BiListPlus} from 'react-icons/bi';
import {AddTask} from '../../components/addTask';
import { useSelector } from 'react-redux';
import { useToast } from "@chakra-ui/react";

//API CALLS
import {addNewTask, getTasksByUserid } from '../../services/taskCalls';

function Home () {
    const [taskDescription, setTaskDescription] = useState('');
    const [isNewTaskLoading, setIsNewTaskLoading] = useState(false);
    const [tasks, setTasks] = useState([])

    const toast = useToast();
    
    const userId = useSelector(state => state.authReducer.user._id)

    useEffect(()=>{
        getTask()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const validationToastMessagem = (title, message) => {
        toast({
            title: title,
            description: message,
            status: "error",
            duration: 5000,
            isClosable: true,
        })
    }

    async function handleAddnewTask () {
        if (taskDescription.length !== 0){
            setIsNewTaskLoading(true)
            addNewTask(taskDescription, userId).then(()=>{
                setIsNewTaskLoading(false)
                setTaskDescription('')
                getTask()
            }).catch(()=>{
                setIsNewTaskLoading(false)
                validationToastMessagem(
                    "Desculpe!",          
                    "Tente novamente mais tarde!"
                )           
            })            
        }
    }
    
    async function getTask(){
        getTasksByUserid(userId).then((response)=>{
            setTasks(response.reverse())
        })        
    }

    return(
        <>
            <Header/>
            <Background>
                <Container>
                    <TitleContainer>
                        <div className='icon-task-title-container'>
                            <BiListPlus/>
                        </div>
                        <h2>Tasks</h2>
                    </TitleContainer>

                        <AddTask
                            setTaskDescription={setTaskDescription}
                            handleAddnewTask={handleAddnewTask}
                            taskDescription={taskDescription}
                            isNewTaskLoading={isNewTaskLoading}
                        />
                    
                    {/*TASKS TO DO */}
                    <TaskListContainer>
                        <h3>Tasks</h3>

                        {
                            tasks.map((task, index) => (                                                         
                                !task?.isDone ? (                                    
                                    <TaskItem
                                        key={index}
                                        taskId={task._id}
                                        taskDescription={task.description}
                                        isComplete={task.isDone}
                                        getTask={getTask}
                                    />
                                ) : null
                            ))                           
                        }
  
                    </TaskListContainer>

                    {/*TASKS DONE*/}
                    <TaskListContainer>
                    <h3>Completas</h3>
                    {
                        tasks.map((task, index) => (                                
                            task?.isDone ? (
                                <TaskItem
                                    key={index}
                                    taskId={task._id}
                                    taskDescription={task.description}
                                    isComplete={task.isDone}
                                    getTask={getTask}
                                />
                            ) : null
                        ))                           
                    }
                  
                    </TaskListContainer>            
                </Container>
            </Background>
        </>
    )
}
export default Home;