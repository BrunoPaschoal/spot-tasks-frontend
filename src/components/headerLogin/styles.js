import styled from "styled-components";



export const Container = styled.div`
    //background-color: ${props => props.theme.colors.foreground};
    height: 65px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;

    img{
        margin-left: 35px;
        width: 140px;
    }
`;