import React from 'react';
import { Container } from './styles';

export function GenericTitle ({title, size}) {
    return(
       <Container size={size}>           
           <div>
                <h2>{title}</h2>
           </div>
       </Container>
    )
}