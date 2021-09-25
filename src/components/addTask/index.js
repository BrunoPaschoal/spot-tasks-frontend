import React from 'react';
import {Container} from './styles';
import {BiPlus} from 'react-icons/bi';
import Lottie from 'react-lottie';

import loaderCircle from '../../assets/lootties/loaderCircle.json';

export const AddTask = ({setTaskDescription, handleAddnewTask, taskDescription, isNewTaskLoading}) => {

    return(
        <Container>
            <div
                className={'add-task-icon'}
                onClick={() => handleAddnewTask()}               
            >
                {
                    isNewTaskLoading ? (
                        <Lottie width={35} height={35}
                            options={{
                                animationData: loaderCircle,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice'
                                }                                 
                            }}
                        />
                    ) : (        
                        <BiPlus/>
                    )
                }
            </div>

            <div className='input-container'>
                <input
                    type='text'
                    placeholder='Adicionar Task'
                    onChange={event => setTaskDescription(event.target.value)}
                    value={taskDescription}
                />
            </div>
        </Container>
    )
}