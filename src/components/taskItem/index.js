import React from 'react';
import {Container} from './styles';
import { motion } from 'framer-motion';
import {BiCheck} from 'react-icons/bi';
import {BsFillTrash2Fill} from 'react-icons/bs';

//import {useSelector} from 'react-redux';

export const TaskItem = ({taskDescription, isComplete, taskId}) => {


    function handleDeletetask(){

    }

    function handleChangeTaskStatus(){

    }

    return(
        <Container
            as={motion.div}
            isComplete={isComplete}
            whileHover={{
                scale: 1.02,                
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