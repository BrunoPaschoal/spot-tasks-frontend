import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.foreground};
    height: 65px;
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: space-between;
    padding: 0 35px 0 35px;

    .menu-icon{
        color:${props => props.theme.colors.white};
        font-size: 30px;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }

    .profile-container{
        display: flex;
        align-items: center;
        
        span{
            color:${props => props.theme.colors.white};
            margin-right: 12px;
            font-size: 16px;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
        }

        .pick-profile{
            width: 45px;
            height: 45px;
            border-radius: 100%;
            border: solid 2px ${props => props.theme.colors.primary};
            cursor: pointer;
        }
    }    
`;




