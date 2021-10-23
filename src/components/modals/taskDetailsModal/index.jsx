/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import {Container, HeaderModal, BodyModal, TagSection} from './styles';
import { Tooltip } from "@chakra-ui/react";
import { BiListPlus } from 'react-icons/bi';

//API
import {getTaskById, deleteTaskById, updateTaskDataById} from '../../../services/taskCalls';

Modal.setAppElement('#root');

export function TaskDetailsModal ({id, handleCloseModal, getTask, modalIsOpen}){
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDetails, setTaskDetails] = useState('')
    const [taskTag, setTaskTag] = useState('')

    const payload = {
        description: taskDescription,
        taskDetails: taskDetails,
        tag: {
            tagCode: taskTag.tagCode,
            color: taskTag.color
          }
    }

    console.log(payload);

    async function handleUpdateTaskInfo(){
        updateTaskDataById(id, payload).then(()=>{
            getTask()
            handleCloseModal()
        }).catch(()=>{
            alert('Update falhou')
        })
    }
    
    async function handleDeletetask(){
        deleteTaskById(id).then(()=>{
            getTask()
            handleCloseModal()
        }).catch(()=>{
            alert('erro ao deletar a tarefa')
        })
    }


    useEffect(()=>{
        getTaskById(id).then((data)=>{
            setTaskDescription(data.description)
            setTaskDetails(data.taskDetails)
            setTaskTag(data.tag)
        }).catch(()=>{
            alert("Erro no componete modal")
        })
    },[])

    return(
        <Modal            
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            className='react-modal-content'
            style={{
                overlay:{
                    position: 'fixed',
                    backgroundColor: 'rgba(0, 0, 0, 0.15)',
                    backdropFilter: 'blur(7px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center' 
                },                    
            }}
        >            
            <Container>
                <HeaderModal>
                    <div>
                        <h2>TASK</h2>
                        <p>Detalhes da tarefa</p>
                    </div>
                    <div className='buttons-header-container'>

                    <Tooltip hasArrow label="Excluir tarefa" bg={"gray.300"} color="black" openDelay={350} placement="top">
                        <div className='delete-task-button' onClick={()=> handleDeletetask()}></div>
                    </Tooltip>

                    <Tooltip hasArrow label="Fechar janela" bg="gray.300" color="black" openDelay={350} placement="top">
                        <div className='close-modal-button' onClick={() => handleCloseModal()}></div>  
                    </Tooltip>

                    </div>
                </HeaderModal>

                <BodyModal>
                    <TagSection>
                        <h3>Associar etiqueta</h3>
                        <div className='circle-container'>
                            <div className='purple-circle circle'></div>
                            <div className='orange-circle circle'></div>
                            <div className='yellow-circle circle'></div>
                            <div className='pink-circle circle'></div>
                            <div className='green-circle circle'></div>
                        </div>
                    </TagSection>


                    <div className="edit-task-description-container">
                        <h3>Descrição da tarefa</h3>
                        <div className='edit-task-external-container'>
                            <div className="list-icon">
                                <BiListPlus/>
                            </div>

                            <div className='input-container'>
                                <input
                                    type='text'
                                    placeholder='Editar task'
                                    onChange={event => setTaskDescription(event.target.value)}
                                    value={taskDescription}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className='add-details-container'>
                        <h3>Detalhes da tarefa</h3>
                        <textarea
                            placeholder='Descreva detalhes sobre a tarefa...'
                            rows="10"
                            onChange={event => setTaskDetails(event.target.value)}
                            value={taskDetails}
                        />

                    </div>

                    <div className='salve-button-container'>
                        <button className='save-button' onClick={() => handleUpdateTaskInfo()}>Salvar</button>
                    </div>
                </BodyModal>
            </Container>    
        </Modal>     
    )
}