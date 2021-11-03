import React, {useState, useEffect} from 'react';
import {Background, Container, TitleContainer, TaskListContainer} from './styles';
import { Header } from '../../components/header';
import {AddTask} from '../../components/addTask';
import { useSelector } from 'react-redux';
import { useToast } from "@chakra-ui/react";
import {ResumeTaskCards} from '../../components/resumeTaskCards';
import {GenericTitle} from '../../components/genericTitle';
import { TaskList } from '../../components/taskList';
import { useTasksCount } from '../../hooks/useTasksCount';
import Lottie from 'react-lottie';

//assets
import astronautNothingHere from '../../assets/lootties/astronaut-nothing-here.json';

//API CALLS
import {addNewTask, getTasksByUserid } from '../../services/taskCalls';

function Home () {
    const [taskDescription, setTaskDescription] = useState('');
    const [isNewTaskLoading, setIsNewTaskLoading] = useState(false);
    const [tasks, setTasks] = useState([])
    const [isTaskListLoading, setIsTaskListLoading] = useState(false)

    const toast = useToast();    
    const userId = useSelector(state => state.authReducer.user._id)
    const {amountDone, amountToDo, amountAllTasks} = useTasksCount(tasks)

    const tasksToDo = tasks.filter((item) => !item.isDone)
    const tasksComplete = tasks.filter((item) => item.isDone)

    useEffect(()=>{
        setIsTaskListLoading(true)
        getTasksByUserid(userId).then((response)=>{
            setTasks(response.reverse())
            setIsTaskListLoading(false)
        }).catch((e) => {
            alert(e)
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

                    {
                        amountAllTasks === 0 ? (
                            <Lottie width={850} height={350} style={{marginTop: 70}}
                                options={{
                                    animationData: astronautNothingHere,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }                                 
                                }}
                            />
                        ) : (
                            <>
                                <TaskListContainer>
                                    <GenericTitle title="TASKS" size="small"/>
                                        <TaskList
                                            isLoading={isTaskListLoading}
                                            tasks={tasksToDo}
                                            getTask={getTask}
                                            taskType='toDo'                       
                                        />  
                                </TaskListContainer>
                                <TaskListContainer>
                                <GenericTitle title="COMPLETAS" size="small"/>
                                    <TaskList
                                        isLoading={isTaskListLoading}
                                        tasks={tasksComplete}
                                        getTask={getTask}
                                        taskType='done'                
                                    />
                                </TaskListContainer>
                            </>
                        )
                    }                            


                

                </Container>
            </Background>
        </>
    )
}
export default Home;