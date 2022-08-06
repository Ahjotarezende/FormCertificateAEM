import styled from "styled-components"

export const SelectMicro = styled.select`
    cursor: pointer;
    border-color: ${(props) => props.cbselect};
    color: ${(props) => props.colorselect};
    font-size: ${(props) => props.fsslect};
    border-radius: ${(props) => props.brselect};
    padding-left: 0.6rem;
    background-image: url('https://img.icons8.com/ios-glyphs/30/000000/expand-arrow--v1.png');
    width: 7.18rem;
    height: 2.5rem;
    background-size: 0.95rem;
    background-repeat: no-repeat;
    background-position: 85%;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
`;