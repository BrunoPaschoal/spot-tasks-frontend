import React from 'react';
import { Container, Card } from './styles';
import {MdSelectAll} from 'react-icons/md';
import {FaDotCircle} from 'react-icons/fa';
import {SiCoderwall} from 'react-icons/si';

export function ResumeTaskCardItem ({amount, type, iconsSize, bg, iconColor}) {
    console.log(iconColor);

    if (type === 'total') {
        return(
            <Container >
                <Card iconsSize={iconsSize} bg={bg} iconColor={iconColor}>
                    <div className='icon-container'>
                        <MdSelectAll/>                 
                    </div>
                    <div className='content-container'>
                        <h3>Total</h3>
                        <span>{amount ? amount : 0 }</span>                 
                    </div>
                </Card>
            </Container>     
        )        
    }

    if (type === 'todo') {
        return(
            <Container>
                <Card iconsSize={iconsSize} bg={bg} iconColor={iconColor}>
                    <div className='icon-container'>
                        <SiCoderwall/>                 
                    </div>
                    <div className='content-container'>
                        <h3>A fazer</h3>
                        <span>{amount ? amount : 0 }</span>                 
                    </div>
                </Card>
            </Container>     
        )        
    }

    if (type === 'done') {
        return(
            <Container>
                <Card iconsSize={iconsSize} bg={bg} iconColor={iconColor}>
                    <div className='icon-container'>
                        <FaDotCircle/>                
                    </div>
                    <div className='content-container'>
                        <h3>Completas</h3>
                        <span>{amount ? amount : 0 }</span>                 
                    </div>
                </Card>
            </Container>    
        )        
    }
}