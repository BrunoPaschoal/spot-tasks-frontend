import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.foreground};
    height: 55px;
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: space-between;
    padding: 0 35px 0 35px;

    .menu-icon{
        color:${props => props.theme.colors.textStrong};
        font-size: 28px;
        display: flex;
        justify-content: center;
        cursor: pointer;

        &:active{
            opacity: 0.7;
        }
    }

    .buttons-container{
        display: flex;
        align-items: center;
        font-size: 12px;
        font-weight: 500;
        color: ${props => props.theme.colors.textStrong};
        justify-content: space-between;
        width: 210px;

        button{
            background-color: ${props => props.theme.colors.background};
            padding: 5px;
            border-radius: 3px;
            width: 100px;
            font-weight: 500;

            &:active{
                opacity: 0.7;
            }
        }     
    } 

`;




