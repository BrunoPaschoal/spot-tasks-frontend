import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
`;

export const Card = styled.div`
    margin: 5px;
    height: 90px;
    min-width: 170px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;
    flex: 1;
    display: flex;
    align-items: center;

    .icon-container{
        width: 50px;
        height: 50px;
        background-color: ${props => props.bg};
        border-radius: 100%;
        margin: 15px 10px 15px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.iconColor};
        font-size: ${props => props.iconsSize};
    }

    .content-container{
        display: flex;
        flex-direction: column;
        line-height: 20px;

        h3{
            color: ${props => props.theme.colors.textSoft};
        }

        span{
            color: ${props => props.theme.colors.textStrong};
            font-weight: 900;
            font-size: 20px;
        }        
    }
`;

