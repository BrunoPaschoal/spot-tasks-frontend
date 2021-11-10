import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 450px) {
        flex-direction: column;
    } 
`;
