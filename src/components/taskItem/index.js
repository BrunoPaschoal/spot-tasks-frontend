import React from 'react';
import {Container} from './styles';
import { motion } from 'framer-motion';
import {BiCheck} from 'react-icons/bi';
import {BsFillTrash2Fill} from 'react-icons/bs';

//API CALLS
import {deleteTaskById, updateTaskById} from '../../services/taskCalls';

export const TaskItem = ({taskDescription, isComplete, taskId, getTask}) => {

    async function handleDeletetask(){
        deleteTaskById(taskId).then(()=>{
            getTask()
        }).catch(()=>{
            //Alert
        })
    }

    async function handleChangeTaskStatus(){
        updateTaskById(taskId, isComplete).then(()=>{
            getTask()
        }).catch(()=>{
            //Alert
        })
    }

    return(
        <Container
            as={motion.div}
            isComplete={isComplete}
            whileHover={{
                scale: 1.01,           
            }}     
        >      
            <div className={'add-task-icon'} onClick={() => handleChangeTaskStatus()}>
                {
                    isComplete ? <BiCheck/> : null
                }
            </div>

            <div className='description-container'>
                <span>{taskDescription}</span>
            </div>

            <div className='remove-task-icon' onClick={() => handleDeletetask()}>
                <BsFillTrash2Fill/>
            </div>
        </Container>
    )
}