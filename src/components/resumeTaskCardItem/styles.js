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
    transition: all 0.3s;

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

    &:hover {
        transform: scale(1.05);
        box-shadow: 2px 5px 15px -1px rgba(0,0,0,0.2);
    }

    @media (max-width: 450px) {
        margin: 3px 5px 3px 5px;
        height: auto;
        padding-right: 15px;

        .icon-container{
            width: 30px;
            height: 30px;
            background-color: ${props => props.bg};
            border-radius: 100%;
            margin: 10px 10px 10px 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${props => props.iconColor};
            font-size: 17px;
        }

        .content-container{
            display: flex;
            flex-direction: row;
            flex: 1;
            line-height: 20px;
            justify-content: space-between;

            h3{
                color: ${props => props.theme.colors.textSoft};
            }

            span{
                color: ${props => props.theme.colors.textStrong};
                font-weight: 900;
                font-size: 20px;
            }    
        }
        
    } 
`;

