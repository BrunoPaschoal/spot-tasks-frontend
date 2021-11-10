import styled from "styled-components"

export const DrawerHeaderStyled = styled.div`
    color: ${props => props.theme.colors.textStrong};
    display: flex;
    flex-direction: column;

    .logo{
        width: 180px;
    }
`;

export const MenuListContainer = styled.div`
    color:${props => props.theme.colors.textSoft};
    font-size: 14px;
    margin-top: 50px;
    
    ul{
        list-style: none;
    }

    li{
        padding: 7px;
        padding-left: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;

        span{
            margin-left: 15px;
            font-weight: 700;
        }

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
        }

        &:hover{
            background-color:${props => props.theme.colors.menuHover}
        }
    }

    .active{
        border-left: solid 5px;
        background-color: ${props => props.theme.colors.primaryOpacity20} !important;
        color: ${props => props.theme.colors.primary};
    }    
`;

export const ProjectListContainer = styled.section`
    display: flex;
    flex-direction: column;
    border-top: solid 1px;
    border-color: #E0E0E0;
    margin-top: 30px;

    .title-button-container {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 20px;

        h2 {
            color: ${props => props.theme.colors.textStrong};
            font-weight: 900;
            font-size: 14px;
        }

        button {
            margin-top: 4px;
            display: flex;
            justify-content: center;
            width: 100%;
            background-color: #E0E0E0;
            color: ${props => props.theme.colors.textSoft};
            padding: 5px;
            border-radius: 4px;
            font-weight: 700;
            font-size: 13px;

            &:active {
                opacity: 0.7;
            }
        }
    }    
    
    ul {
        color:${props => props.theme.colors.textSoft};

        li {
            display: flex;
            align-items: center;            
            padding: 7px 0 7px 0;
            cursor: pointer;           

            &:hover{
                background-color:${props => props.theme.colors.menuHover}
            }

            span {
                margin-left: 10px;
                font-size: 15px;
                font-weight: 700;
            }

            .icon-project-container {
                margin-left: 20px;
                color: ${props => props.theme.colors.white};
                background-color: #2E2F35;
                border-radius: 4px;
                font-size: 16px;
                padding: 4px;
            }            
        }
        
        .active {
            /*APENAS QUANDO TIVER A CLASSE ACTIVE*/
            background-color: ${props => props.theme.colors.primaryOpacity20} !important;
            border-color: ${props => props.theme.colors.primary} !important;
            color: ${props => props.theme.colors.textStrong};
            border-left: solid 5px;
        }       
    }


















`;

export const DrawerFooterStyled = styled.footer`
    display: flex;
    border-top: solid 1px;
    padding: 10px 15px 10px 15px !important;
    border-color: #E0E0E0;
    justify-content: space-between !important;

    .left-side-info-footer {
        display: flex;
    }

    .text-footer-container {
        display: flex;
        flex-direction: column;
        margin-left: 8px;
    }

    .user-name-drawer {
        font-weight: 700;
        font-size: 15px; 
        font-family: 'Roboto', sans-serif;
    }

    .user-email-drawer {
        font-weight: 300;
        font-size: 12px;
        margin-top: -5px;
        font-family: 'Roboto', sans-serif;
    }

    .logout-button-container {
        font-size: 25px;
        cursor: pointer;  
        color: ${props => props.theme.colors.textStrong};
        
        &:active {
            opacity: 0.7;
        }
    }

`;