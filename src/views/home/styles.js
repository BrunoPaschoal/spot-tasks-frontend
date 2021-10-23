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
    color: ${props => props.theme.colors.textStrong} ;
    display: flex;
    align-items: baseline;
    margin-bottom: 2px;
`;

export const TaskListContainer = styled.div`
    margin-top: 16px;
`;