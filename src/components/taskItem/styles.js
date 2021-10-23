import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    padding: 15px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.foreground};
    display: flex;
    align-items: center;
    margin: 5px 0 5px 0;
    cursor: pointer;

    span{
        color: ${props => props.theme.colors.textStrong};
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 15px;        
        text-decoration: ${props => props.isComplete? 'line-through' : 'none'}; 
    }

    .description-container{
        margin-left: 15px;
        flex-grow: 1;
    }

    .add-task-icon{
        min-width: 23px;
        min-height: 23px;
        max-width: 23px;
        max-height: 23px;
        border-radius: 50px;
        font-size: 90px;
        border-style: solid ;
        color: ${props => props.theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        align-self: flex-start;
        background-color: ${props => props.isComplete? props.theme.colors.textStrong : props.theme.colors.placeholder};

    }
`;