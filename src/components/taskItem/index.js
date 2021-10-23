import React, {useState} from 'react';
import {Container} from './styles';
import { motion } from 'framer-motion';
import {BiCheck} from 'react-icons/bi';
import {TaskDetailsModal} from '../modals/taskDetailsModal';

//API CALLS
import {updateTaskStatusById} from '../../services/taskCalls';

export const TaskItem = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false) 

    //MODAL CONTROL
    function handleCloseModal(){
        setModalIsOpen(false)
    }

    function handleOpenModal(){
        setModalIsOpen(true)
    }

    async function handleChangeTaskStatus(){
        updateTaskStatusById(props.taskId, props.isComplete).then(()=>{
            props.getTask()
        }).catch(()=>{
            alert('Update falhou')
        })
    }

    return(
        <>
            <Container
                as={motion.div}
                isComplete={props.isComplete}
                whileHover={{
                    scale: 1.01,      
                }}
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}


                onClick={() => handleOpenModal()}
            >
                <div className={'add-task-icon'} onClick={() => handleChangeTaskStatus()}>                
                    <BiCheck/>                
                </div>

                <div className='description-container'>
                    <span>{props.taskDescription}</span>
                </div>  
            </Container>

            {/*Render only modalIsOpen is true */}
            {
                modalIsOpen ? (
                    <TaskDetailsModal
                        modalIsOpen={modalIsOpen}
                        handleCloseModal={handleCloseModal}
                        id={props.taskId}
                        getTask={props.getTask}                        
                    />
                ) : null
            }            
        </>
    )
}