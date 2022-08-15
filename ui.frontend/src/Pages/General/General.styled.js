import styled from "styled-components"

export const FullPage = styled.div`
    font-family: ${(props) => props.fontFamily}, sans-serif;
    background-color: ${(props) => props.backGround};
    h1{
        color: white;
    }
`;