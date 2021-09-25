/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import {Container, ContentContainer, LoginContainer } from './styles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Lottie from 'react-lottie';

//api
import api from '../../services/api';

//assets
import loading from '../../assets/lootties/loader.json';

//Redux
import { useDispatch } from 'react-redux';
import { login } from '../../store/modules/auth/actions';

//components
import {HeaderLogin} from '../../components/headerLogin';

function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch();
    const history = useHistory();

    async function handleSubmit() {
        setIsLoading(true)
        await api.post('/auth/singin', {           
            email: email,
            password: password  
        }).then((response)=>{    
            setIsLoading(false)                  
            const user = {...response.data}
            dispatch(login(user))   
            history.push('/')
        })
        setIsLoading(true)        
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
                        <h2>Login</h2>
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
                                    'ENTRAR'
                                )
                            }                        
                        </button>
                        
                        <p>Ainda não tem uma conta? <strong><Link to='/signIn'>Clique aqui!</Link></strong></p>
                    </LoginContainer>               
            </ContentContainer>         
        </Container>
    )
}

export default Login;