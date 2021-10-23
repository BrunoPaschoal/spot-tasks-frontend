import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.background};
    border-radius: 10px;
    width: 700px; 
    overflow: hidden;
`;

export const HeaderModal = styled.div`
    background-color: ${props => props.theme.colors.primary};
    padding:20px;
    color: ${props => props.theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{
        line-height: 1;
        font-size: 30px;
        font-weight: 500;
        margin-bottom: 4px;
    }

    p{
        line-height: 1;
        font-weight: 300;
    }

    .buttons-header-container{
        display: flex;

        .delete-task-button{
            width: 22px;
            height: 22px;
            background-color: ${props => props.theme.colors.warning};
            border-radius: 100%;
            margin-right: 5px;
            cursor: pointer;

            &:active{
                opacity: 0.7;
            }
        }
    
        .close-modal-button{
            width: 22px;
            height: 22px;
            background-color: ${props => props.theme.colors.background};
            border-radius: 100%;
            cursor: pointer;

            &:active{
                opacity: 0.7;
            }
        }
    }
`;

export const BodyModal = styled.div`
    padding: 5px 20px 20px 20px;     

    h3{
        margin-bottom: 3px;
        color: ${props => props.theme.colors.textStrong};
        font-weight: 500;
        font-size: 16px;

    }

    .edit-task-description-container{
        margin-top: 15px;
    }

    .edit-task-external-container{
        padding: 8px;
        border-radius: 6px;
        display: flex;
        align-items: center;    
        background: ${props => props.theme.colors.white};
    }   

    .list-icon{
        font-size: 28px;
        margin-left: 3px;
    }

    .input-container{
        flex: 1;
        margin-left: 10px;
    }

    input{
        width: 100%;
        background-color: transparent;
        color: ${props => props.theme.colors.textStrong};
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 14px;

        &::placeholder{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            color: ${props => props.theme.colors.placeholder};
        }
    }

    .add-details-container{
        margin-top: 15px;
        textarea{
            width: 100%;
            height: 150px;
            border-radius: 6px;
            resize: none;
            padding: 10px;
            color: ${props => props.theme.colors.textStrong};
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 14px;

            &::placeholder{
                font-family: 'Roboto', sans-serif;
                font-size: 15px;
                font-weight: 400;
                color: ${props => props.theme.colors.placeholder};
            }
        }
    }

    .salve-button-container{
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
    }

    .save-button{
        width: 140px;
        height: 40px;
        color: ${props => props.theme.colors.white};
        border-radius: 6px;
        background-color: ${props => props.theme.colors.primary};

        &:active{
            opacity: 0.9;
        }
    }
`;

export const TagSection = styled.div`
    margin-top: 25px;

    .circle-container{
        display: flex;
    }

    .circle{
        width: 25px;
        height: 25px;
        border-radius: 100%;
        margin-right: 5px;
        cursor: pointer;       
    }
    .purple-circle{
        background-color: ${props => props.theme.colors.primary};
        border: ridge 2px black;
        border-spacing: 10px;

    }

    .orange-circle{
        background-color: ${props => props.theme.colors.orange};
    }

    .yellow-circle{
        background-color: ${props => props.theme.colors.yellow};
    }

    .pink-circle{
        background-color: ${props => props.theme.colors.pink};
    }

    .green-circle{
        background-color: ${props => props.theme.colors.green};
    }
`;