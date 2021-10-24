import React, {useState, useEffect} from 'react';
import {Background, Container, TitleContainer, TaskListContainer} from './styles';
import { Header } from '../../components/header';
import { TaskItem } from '../../components/taskItem';
import {AddTask} from '../../components/addTask';
import { useSelector } from 'react-redux';
import { useToast } from "@chakra-ui/react";
import {ResumeTaskCards} from '../../components/resumeTaskCards';
import {GenericTitle} from '../../components/genericTitle';
import { Skeleton } from "@chakra-ui/react";

//API CALLS
import {addNewTask, getTasksByUserid } from '../../services/taskCalls';

function Home () {
    const [taskDescription, setTaskDescription] = useState('');
    const [isNewTaskLoading, setIsNewTaskLoading] = useState(false);
    const [tasks, setTasks] = useState([])
    const [isTaskListLoading, setIsTaskListLoading] = useState(false)

    const toast = useToast();    
    const userId = useSelector(state => state.authReducer.user._id)

    const tasksToDo = tasks.filter((item) => !item.isDone)
    const tasksComplete = tasks.filter((item) => item.isDone)

    useEffect(()=>{
        setIsTaskListLoading(true)
        getTask().then(()=>{
            setIsTaskListLoading(false)
        }).catch(()=>{
            setIsTaskListLoading(false)
        })
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
    
    //Amount Tasks Control
    let amountToDo = 0
    let amountDone = 0
    let amountAllTasks = tasks.length
    for (let index = 0; index < tasks.length; index++) {
        const element = tasks[index];
        if (!element.isDone) {
            amountToDo = amountToDo + 1
        }        
        if (element.isDone) {
            amountDone = amountDone + 1
        }        
    }

    return(
        <>
            <Header/>
            <Background>
                <Container>
                    <TitleContainer>
                        <GenericTitle title="TASKS" size="big"/>
                    </TitleContainer>
                    <ResumeTaskCards
                        total={amountAllTasks}
                        toDo={amountToDo}
                        Done={amountDone}
                    />

                    <AddTask
                        setTaskDescription={setTaskDescription}
                        handleAddnewTask={handleAddnewTask}
                        taskDescription={taskDescription}
                        isNewTaskLoading={isNewTaskLoading}
                    />
                    
                    {/*TASKS TO DO */}
                    <TaskListContainer>
                        <GenericTitle title="TASKS" size="small"/>
                        {
                            isTaskListLoading ? (
                                <>
                                    <Skeleton height="45px" borderRadius='3px' mb='7px' startColor="#DADADA" endColor="#E8E8E8" mt='5px'/>
                                    <Skeleton height="45px" borderRadius='3px' mb='7px' startColor="#DADADA" endColor="#E8E8E8"/>
                                    <Skeleton height="45px" borderRadius='3px' mb='7px' startColor="#DADADA" endColor="#E8E8E8"/>
                                </>
                            ) : (
                                tasksToDo.length > 0 ? (
                                    tasksToDo.map((task, index) => (   
                                        <TaskItem
                                            key={index}
                                            taskId={task._id}
                                            taskDescription={task.description}
                                            isComplete={task.isDone}
                                            getTask={getTask}                            
                                        />                
                                    ))
                                ) : (
                                    <h1>Nada pra fazer hoje! Adicionne uma tarefa ou vá para praia!</h1>
                                )
                            )
                        }

                    </TaskListContainer>

                    {/*TASKS DONE*/}
                    <TaskListContainer>
                    <GenericTitle title="COMPLETAS" size="small"/>
                    {
                        isTaskListLoading ? (
                            <>
                                <Skeleton height="45px" borderRadius='3px' mb='7px' startColor="#DADADA" endColor="#E8E8E8" mt='5px'/>
                                <Skeleton height="45px" borderRadius='3px' mb='7px' startColor="#DADADA" endColor="#E8E8E8"/>
                                <Skeleton height="45px" borderRadius='3px' mb='7px' startColor="#DADADA" endColor="#E8E8E8"/>  
                            </>
                        ) : (
                            tasksComplete.length > 0 ? (
                                tasksComplete.map((task, index) => (   
                                    <TaskItem
                                        key={index}
                                        taskId={task._id}
                                        taskDescription={task.description}
                                        isComplete={task.isDone}
                                        getTask={getTask}                            
                                    />                
                                ))
                            ) : (
                                <h1>Nenhuma tarefa completa</h1>
                            )
                        )
                    }           
                    </TaskListContainer>            
                </Container>
            </Background>
        </>
    )
}
export default Home;