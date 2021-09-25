import styled from "styled-components"

export const DrawerHeaderStyled = styled.div`
color: ${props => props.theme.colors.white};
display: flex;
flex-direction: column;

.logo{
    width: 180px;
}

.user-name-drawer{
    font-weight: 500;
    font-size: 20px; 
    font-family: 'Roboto', sans-serif;

}

.user-email-drawer{
    font-weight: 300;
    font-size: 14px;
    margin-top: -5px;
    font-family: 'Roboto', sans-serif;
}

`;

export const MenuListContainer = styled.div`
    color:${props => props.theme.colors.white};
    font-size: 15px;
    
    ul{
        list-style: none;
    }

    li{
        padding: 8px;
        margin-bottom: 5px;
        border-radius: 7px;
        display: flex;
        align-items: center;
        cursor: pointer;

        span{
            margin-left: 15px;
        }

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
        }

        &:hover{
            background-color:${props => props.theme.colors.hover}
        }
    }

    .active{
        background-color: ${props => props.theme.colors.secondary} !important;
    } 
    
`;