import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background-color: ${props => props.theme.colors.background};
    overflow: hidden;
`;

export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;    
`

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    margin: 0px 20px 0 20px;    

    h2{
        color: ${props => props.theme.colors.textStrong};
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 40px;
        margin-bottom: 5px;
    }

    input{
        width: 100%;        
        height: 50px;
        margin-bottom: 10px;
        border-radius: 5px;
        background-color: ${props => props.theme.colors.foreground};
        color: ${props => props.theme.colors.textStrong};
        padding-left: 15px;
        font-size: 16px;

        &::placeholder{
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 15px;
        color: ${props => props.theme.colors.placeholder};
        }
        
        &:focus{
            border: solid 2px ${props => props.theme.colors.primary};            
        }
    }

    button{
        width: 100%;        
        height: 50px;
        border-radius: 5px;
        background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
        color: ${props => props.theme.colors.white};
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        margin-bottom: 10px;

        &:active{
        opacity: 0.7;
    }
    }

    p{
        color: ${props => props.theme.colors.textStrong};
        text-align: center;
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;

        a{
            color: ${props => props.theme.colors.primary};
            cursor: pointer;
        }        
    }
`;  