import React from 'react';
import { Container, CardTotal, CardToDo, CardDone } from './styles';
import {MdSelectAll} from 'react-icons/md';
import {FaDotCircle} from 'react-icons/fa';
import {SiCoderwall} from 'react-icons/si';

export function ResumeTaskCards ({total, toDo, Done}) {
    return(
        <Container>
            <CardTotal>
                <div className='icon-container'>
                    <MdSelectAll/>                 
                </div>
                <div className='content-container'>
                    <h3>Total</h3>
                    <span>{total ? total : 0 }</span>                 
                </div>
            </CardTotal>

            <CardToDo>
                <div className='icon-container'>
                    <SiCoderwall/>            
                </div>
                <div className='content-container'>
                    <h3>A fazer</h3>
                    <span>{toDo ? toDo : 0 }</span>                    
                </div>
            </CardToDo>
            <CardDone>
                <div className='icon-container'>
                    <FaDotCircle/>                    
                </div>
                <div className='content-container'>
                    <h3>Completas</h3>
                    <span>{Done ? Done : 0 }</span>                    
                </div>
            </CardDone>
        </Container>     
    )
}