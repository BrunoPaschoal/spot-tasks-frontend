import styled from "styled-components";

export const Container = styled.div`    
    display: flex;

    h2{
        font-size: ${props => props.size === "big" ? '30px' : "15px" } ;
        font-weight: 900;
        line-height: 1;
        transform: translateY(${props => props.size === "big" ? '-15px' : "-5px" });
    }

    div{        
        height: ${props => props.size === "big" ? '14px' : "12px" };
        background-color: ${props => props.theme.colors.primaryOpacity30};
        padding: 0 2px 0 2px;
        margin-bottom: ${props => props.size === "big" ? '10px' : "4px" };
        margin-top: ${props => props.size === "big" ? '0px' : "12px" } ;
    }
`;