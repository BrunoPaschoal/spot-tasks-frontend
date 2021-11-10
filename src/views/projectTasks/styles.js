import styled from 'styled-components';

export const Background = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background-color: ${props => props.theme.colors.background};
    overflow: hidden;    
`;

export const Container = styled.div`
    max-width: 800px;
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0 15px 0 15px;
    margin-top: 120px;

    .lottie-container {

    }

    @media (max-width: 400px) {
        margin-top: 100px;        
    }  
`; 

export const TitleContainer = styled.div`
    color: ${props => props.theme.colors.textStrong} ;
    display: flex;
    align-items: baseline;
    margin-bottom: 2px;
    padding: 0 5px 0 5px;
`;

export const ResumeCardsContainer = styled.div`
    margin-bottom: 20px;
`;

export const AddTaskContainer = styled.div`
    padding: 0 5px 0 5px;
`;

export const TaskListContainer = styled.div`
    padding: 0 5px 0 5px;
    margin-top: 15px;
`;