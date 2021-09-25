import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.foreground};
    border-radius: 8px;
    width: 500px;
    padding: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const TextContainer = styled.div`
    width: 100%;
    margin: 15px 0 15px 0;
    font-size: 13px;
    display: flex;
    justify-content: center;

     h2{
        color: ${props => props.theme.colors.secondary} ;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
    }

    span{
        color: ${props => props.theme.colors.white} ;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
    }
`

export const GotToLoginButton = styled.button`
    width: 100%;        
    height: 50px;
    border-radius: 5px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin-bottom: 10px;

    &:active{
    opacity: 0.7;
    }
`
