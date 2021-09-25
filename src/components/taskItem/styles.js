import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    padding: 15px;
    border-radius: 18px;
    background-color: ${props => props.theme.colors.foreground};
    display: flex;
    align-items: center;
    margin: 5px 0 5px 0;
    cursor: pointer;



    span{
        color: ${props => props.theme.colors.white};
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 15px;        
        text-decoration: ${props => props.isComplete? 'line-through' : 'none'}; 
    }

    .description-container{
        margin-left: 15px;
        flex-grow: 1;
    }

    .add-task-icon{
        min-width: 24px;
        min-height: 24px;
        max-width: 24px;
        max-height: 24px;
        border-radius: 8px;
        font-size: 90px;
        border-style: solid ;
        border-width: ${props => props.isComplete ? 0 : '3px'};
        border-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        align-self: flex-start;
        background-color: ${props => props.isComplete? props.theme.colors.primary : null};
    }
    
    .remove-task-icon{
        cursor: pointer;
        color: ${props => props.theme.colors.white};
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 18px;
        margin-left: 10px;
    }
`;