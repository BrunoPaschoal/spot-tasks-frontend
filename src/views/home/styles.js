import styled from 'styled-components';

export const Background = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background-color: ${props => props.theme.colors.background};
    overflow: hidden;
`;

export const Container = styled.div`
    width: 800px;
    padding: 0 25px 0 25px;
    margin-top: 130px;
`; 

export const TitleContainer = styled.div`
    color: ${props => props.theme.colors.white} ;
    display: flex;
    align-items: baseline;
    margin-bottom: 16px;

    .icon-task-title-container{
        font-size: 25px;
        background-color: ${props => props.theme.colors.foreground} ;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        border-radius: 10px;
        margin-right: 10px;
    }

    h2{
        font-size: 30px;
    }
`;

export const TaskListContainer = styled.div`
    margin-top: 50px;

    h3{
        color: ${props => props.theme.colors.white} ;
        font-size: 15px;
        margin-bottom: 10px;
    }
`;