import styled from "styled-components";

export const Container = styled.div`
    padding: 8px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.white};

    .list-icon{
        font-size: 28px;
        margin-left: 3px;
    }

    .input-container{
        flex: 1;
        margin-left: 10px;
    }

    input{
        width: 100%;
        background-color: transparent;
        color: ${props => props.theme.colors.textStrong};
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 14px;

        &::placeholder{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            color: ${props => props.theme.colors.placeholder};
        }
    }

    .add-task-icon{
        width: 25px;
        height: 25px;
        border-radius: 4px;        
        color: ${props => props.theme.colors.text};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        cursor: pointer;
        transition: all 250ms ease-in-out;

        &:active{
            opacity: 0.7;
        }
        
        &:hover{
            background: ${props => props.theme.colors.background};
        }
    }    
`;

export const GradientLine = styled.div`
    height: 2px;
    background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});

`;