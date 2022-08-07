import styled from "styled-components"

export const Message = styled.p`
    color: ${(props) => props.colormessage};
    font-size: ${(props) => props.fsmessage};
    font-weight: ${(props) => props.fwmessage};
    margin: 0;
    padding: 0;
`;