import styled from "styled-components"

export const Title = styled.p`
    font-family: ${(props) => props.fonts}, sans-serif;
    font-weight: 600;
    font-size: ${(props) => props.fonte};
    color: ${(props) => props.titlecolor};
`;

export const DivForm = styled.div`
    background-color: ${(props) => props.bgform};
    width: 617px;
    height: 763px;
    .none{
        display: none;
    }
    border-radius: 20px;
    margin: 10px auto;
`;