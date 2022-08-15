import styled from "styled-components"

export const DivHeader = styled.div`
    background-color: transparent;
    border-bottom: 2px solid #AAAAAA;
    display: flex;
    flex-direction: column;
    padding: 3em 0;`
;

export const SmallText = styled.h2`
    color: ${(props) => props.colorsmalltextbs};
    font-size: 18px;
    margin-left: 118px;`
;

export const BigText = styled.h3`
    font-size: 40px;
    margin-left: 118px;
    color: ${(props) => props.colorbigtextbs};`
;