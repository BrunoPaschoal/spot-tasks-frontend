import React, {useState} from 'react';
import {Background, Container, TitleContainer, TaskListContainer} from './styles';
import { Header } from '../../components/header';
import { TaskItem } from '../../components/taskItem';
import {BiListPlus} from 'react-icons/bi';
import {AddTask} from '../../components/addTask';

//import {useSelector} from 'react-redux';

function Home () {
    const [taskDescription, setTaskDescription] = useState('');
    const [isNewTaskLoading, setIsNewTaskLoading] = useState(false);
    const [tasks, setTasks] = useState([])


    function handleAddnewTask () {
        //Chamada API
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
                                        taskId={task?.key}
                                        taskDescription={task?.taskDescription}
                                        isComplete={task?.isDone}
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
                                    taskId={task?.key}
                                    taskDescription={task?.taskDescription}
                                    isComplete={task?.isDone}
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