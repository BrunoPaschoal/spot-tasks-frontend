/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Container, HeaderModal, BodyModal, TagSection } from './styles';
import { Tooltip } from "@chakra-ui/react";
import { BiListPlus } from 'react-icons/bi';
import { FaCheck, FaExclamation } from 'react-icons/fa';
import theme from '../../../global/theme/light';

//API
import { getTaskById, deleteTaskById, updateTaskDataById } from '../../../services/taskCalls';

Modal.setAppElement('#root');

export function TaskDetailsModal({ id, handleCloseModal, getTask, modalIsOpen }) {
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDetails, setTaskDetails] = useState('')
    const [taskTag, setTaskTag] = useState('')
    const [deleteTaskAlertControl, setDeleteTaskAlertControl] = useState(false)


    const payload = {
        description: taskDescription,
        taskDetails: taskDetails,
        tag: {
            tagCode: taskTag.tagCode,
            color: taskTag.color
        }
    }

    if (deleteTaskAlertControl) {
        setTimeout(() => {
            setDeleteTaskAlertControl(false)
        }, 5000)
    }

    async function handleUpdateTaskInfo() {
        updateTaskDataById(id, payload).then(() => {
            getTask()
            handleCloseModal()
        }).catch(() => {
            alert('Update falhou')
        })
    }

    function handleChangeTag(tagInfo) {
        if (tagInfo.tagCode === taskTag.tagCode) {
            setTaskTag({ tagCode: 0, color: '' })
        } else {
            setTaskTag(tagInfo)
        }
    }

    async function handleDeletetask() {
        deleteTaskById(id).then(() => {
            handleCloseModal()
            getTask()
        }).catch(() => {
            alert('erro ao deletar a tarefa')
        })
    }

    useEffect(() => {
        getTaskById(id).then((data) => {
            setTaskDescription(data.description)
            setTaskDetails(data.taskDetails)
            setTaskTag(data.tag)
        }).catch(() => {
            alert("Erro no componete modal")
        })
    }, [])

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            className='react-modal-content'
            style={{
                overlay: {
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

                        {
                            deleteTaskAlertControl ? (
                                <Tooltip hasArrow label="Tem certeza?" bg={"gray.300"} color="black" placement="top" isOpen>
                                    <div className='delete-alert-task-button' onClick={() => handleDeletetask()}><FaExclamation /></div>
                                </Tooltip>
                            ) : (
                                <Tooltip hasArrow label="Excluir tarefa" bg={"gray.300"} color="black" openDelay={350} placement="top">
                                    <div className='delete-task-button' onClick={() => setDeleteTaskAlertControl(true)}></div>
                                </Tooltip>
                            )
                        }

                        <Tooltip hasArrow label="Fechar janela" bg="gray.300" color="black" openDelay={350} placement="top">
                            <div className='close-modal-button' onClick={() => handleCloseModal()}></div>
                        </Tooltip>

                    </div>
                </HeaderModal>

                <BodyModal>
                    <TagSection
                        tagCode={taskTag.tagCode}
                    >
                        <h3>Associar etiqueta</h3>
                        <div className='circle-container'>
                            <div className='brown-circle circle' onClick={() => handleChangeTag({ tagCode: 1, color: theme.colors.brown })}>
                                {taskTag.tagCode === 1 ? <FaCheck /> : null}
                            </div>

                            <div className='orange-circle circle' onClick={() => handleChangeTag({ tagCode: 2, color: theme.colors.orange })}>
                                {taskTag.tagCode === 2 ? <FaCheck /> : null}
                            </div>

                            <div className='yellow-circle circle' onClick={() => handleChangeTag({ tagCode: 3, color: theme.colors.yellow })}>
                                {taskTag.tagCode === 3 ? <FaCheck /> : null}
                            </div>

                            <div className='pink-circle circle' onClick={() => handleChangeTag({ tagCode: 4, color: theme.colors.pink })}>
                                {taskTag.tagCode === 4 ? <FaCheck /> : null}
                            </div>

                            <div className='green-circle circle' onClick={() => handleChangeTag({ tagCode: 5, color: theme.colors.greenSoft })}>
                                {taskTag.tagCode === 5 ? <FaCheck /> : null}
                            </div>
                        </div>
                    </TagSection>

                    <div className="edit-task-description-container">
                        <h3>Descrição da tarefa</h3>
                        <div className='edit-task-external-container'>
                            <div className="list-icon">
                                <BiListPlus />
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