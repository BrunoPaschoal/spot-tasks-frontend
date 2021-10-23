import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-bottom: 35px;
`;

export const CardTotal = styled.div`
    margin-right: 10px;
    height: 90px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;
    flex: 1;
    display: flex;
    align-items: center;

    .icon-container{
        width: 50px;
        height: 50px;
        background-color: ${props => props.theme.colors.primaryOpacity30};
        border-radius: 100%;
        margin: 15px 10px 15px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.colors.primary} ;
        font-size: 30px;
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

export const CardToDo = styled.div`
     margin-right: 10px;
    height: 90px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;
    flex: 1;
    display: flex;
    align-items: center;

    .icon-container{
        width: 50px;
        height: 50px;
        background-color: ${props => props.theme.colors.secondaryOpacity30};
        border-radius: 100%;
        margin: 15px 10px 15px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.colors.secondary};
        font-size: 20px;
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

export const CardDone = styled.div`
    height: 90px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;
    flex: 1;
    display: flex;
    align-items: center;

    .icon-container{
        width: 50px;
        height: 50px;
        background-color: ${props => props.theme.colors.greenOpacity30};
        border-radius: 100%;
        margin: 15px 10px 15px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.colors.green};
        font-size: 25px;
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