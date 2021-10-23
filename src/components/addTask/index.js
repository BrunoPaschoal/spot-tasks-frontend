import React from 'react';
import {Container, GradientLine} from './styles';
import {BiRightArrowAlt, BiListPlus} from 'react-icons/bi';
import Lottie from 'react-lottie';

import loaderCircle from '../../assets/lootties/loaderCircle.json';

export const AddTask = ({setTaskDescription, handleAddnewTask, taskDescription, isNewTaskLoading}) => {

    function handleSubmitWithKeyPress (e){
        if (e.key === 'Enter') {
            handleAddnewTask()
        }
    }

    return(
        <>
            <Container>
                <div className="list-icon">
                    <BiListPlus/>
                </div>

                <div className='input-container'>
                    <input
                        type='text'
                        placeholder='Adicionar Task'
                        onChange={event => setTaskDescription(event.target.value)}
                        value={taskDescription}
                        onKeyDown={(e) => handleSubmitWithKeyPress(e)}
                    />
                </div>
                
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
                            <BiRightArrowAlt/>
                        )
                    }
                </div>
            </Container>
            <GradientLine/>
        </>
    )
}