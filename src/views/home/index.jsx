import React, {useState, useEffect} from 'react';
import {Background, Container, TitleContainer, TaskListContainer} from './styles';
import { Header } from '../../components/header';
import { TaskItem } from '../../components/taskItem';
import {AddTask} from '../../components/addTask';
import { useSelector } from 'react-redux';
import { useToast } from "@chakra-ui/react";
import {ResumeTaskCards} from '../../components/resumeTaskCards';
import {GenericTitle} from '../../components/genericTitle';

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
                    <GenericTitle title="COMPLETAS" size="small"/>
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