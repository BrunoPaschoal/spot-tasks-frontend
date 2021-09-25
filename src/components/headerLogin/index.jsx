import React from 'react';
import { Container } from './styles';

//logo
import logo from '../../assets/logo.svg'

export function HeaderLogin () {
    return(
        <Container>
            <img src={logo} alt="Spot Tasks Logo"/>
        </Container>
    )
}