import React from 'react';
import Modal from 'react-modal';
import {Container, GotToLoginButton, TextContainer} from './styles';
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';

//assets
import astronaut from '../../../assets/lootties/astronaut.json';

//Modal.setAppElement('#root');

export function SignUpModalContent ({modalIsOpen, handleCloseModal}){

    const history = useHistory()

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
                <Lottie width={350} height={350}
                    options={{
                        animationData: astronaut,
                        rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice'
                        }                                 
                    }}
                />
                <TextContainer>
                    <h2>LEGAL! <span>Cadastro realizado com sucesso</span></h2>                
                </TextContainer>


                <GotToLoginButton
                    onClick={() => history.push('/')}
                >
                    LOGIN
                </GotToLoginButton>         
            </Container>
        </Modal>     
    )
}