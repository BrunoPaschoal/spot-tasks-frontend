import styled from "styled-components";

export const Container = styled.div`
    padding: 8px;
    border-radius: 15px;
    border: solid 2.7px ${props => props.theme.colors.foreground};
    display: flex;
    align-items: center;

    .input-container{
        flex: 1;
        margin-left: 10px;
    }

    input{
        width: 100%;
        background-color: transparent;
        color: ${props => props.theme.colors.white};
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 14px;

        &::placeholder{
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
        }
    }

    .add-task-icon{
        width: 25px;
        height: 25px;
        border-radius: 8px;
        background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
        color: ${props => props.theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        cursor: pointer;
        transition: transform 250ms ease-in-out;

        &:active{
            opacity: 0.7;
        }
        
        &:hover{
            transform: scale(1.05,1.05);            
        }
    }

    
`;