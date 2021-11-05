import React from 'react';
import { Container } from './styles';
import { ResumeTaskCardItem } from '../resumeTaskCardItem';
import theme from '../../global/theme/light';

export function ResumeTaskCardsList ({total, toDo, done}) {
    return(
        <Container>
            <ResumeTaskCardItem
                amount={total}
                type='total'
                iconsSize='30px'
                bg={theme.colors.primaryOpacity30}
                iconColor={theme.colors.primary}
            />

            <ResumeTaskCardItem
                amount={toDo}
                type='todo'
                iconsSize='22px'
                bg={theme.colors.secondaryOpacity30}
                iconColor={theme.colors.secondary}      
            />

            <ResumeTaskCardItem
                amount={done}
                type='done'
                iconsSize='30px'
                bg={theme.colors.greenOpacity30}
                iconColor={theme.colors.green}      
            /> 
        </Container>     
    )
}