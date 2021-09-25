/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {Container, ContentContainer, LoginContainer } from './styles';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import {IoArrowUndoSharp} from 'react-icons/io5';

//components
import {HeaderLogin} from '../../components/headerLogin';
import {SignUpModalContent} from '../../components/modals/signUpModalContent';
import loading from '../../assets/lootties/loader.json';

import api from '../../services/api';

function NewAcount () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [modalIsOpen, setModalisOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const history = useHistory()   

    //MODAL CONTROL
    function handleCloseModal(){
        setModalisOpen(false)
    }

    function handleOpenModal(){
        setModalisOpen(true)
    }
    
    async function handleSubmit() {
        setIsLoading(true)
        await api.post('/auth/register', {
            name: name,
            email: email,
            password: password  
        }).then((response)=>{
            console.log(response);
            setIsLoading(false)
            handleOpenModal()
        }).catch((err)=>{
            setIsLoading(false)
            alert(err)       
        })
    }

    return(
        <Container>
            <HeaderLogin/>
            <ContentContainer>               
                    <LoginContainer as={motion.div}
                        initial={{opacity: 0, y: -150}}
                        animate={{opacity: 1, y: -0}}
                        transition={{duration: 1.0, delay: 0.3}}                    
                    >

                        <div className='back-button' onClick={() => history.push('/')}>
                            <IoArrowUndoSharp/>
                        </div>
                        <h2>Cadastre-se</h2>
                        <input
                            type="text"
                            placeholder='Nome'
                            onChange={event => setName(event.target.value)}
                            value={name}
                        />

                        <input
                            type="text"
                            placeholder='E-mail'
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                        />

                        <input
                            type="password"
                            placeholder='Senha'
                            onChange={event => setPassword(event.target.value)}
                            value={password}
                        />

                        <button onClick={() => handleSubmit()}>
                        {
                            isLoading ? (
                                <Lottie width={45} height={45}
                                    options={{
                                        animationData: loading,
                                        rendererSettings: {
                                            preserveAspectRatio: 'xMidYMid slice'
                                        }                                 
                                    }}
                                />
                            ) : (
                                'CADASTRAR'
                            )
                        }
                        </button>  
                    </LoginContainer>               
            </ContentContainer> 

            {/*REACT MODAL*/} 
            <SignUpModalContent
                modalIsOpen={modalIsOpen}
                handleCloseModal={handleCloseModal}
            />

        </Container>
    )
}

export default NewAcount;