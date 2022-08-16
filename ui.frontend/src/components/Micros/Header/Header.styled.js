import styled from "styled-components"

export const DivHeader = styled.div`
    background-color: transparent;
    border-bottom: 2px solid #AAAAAA;
    display: flex;
    flex-direction: column;
    padding: 3em 0;`
;

export const SmallText = styled.h4`
    font-size: 15px;
    margin-left: 120px;
    color: ${(props) => props.colorsmalltext};
    `
;

export const BigText = styled.h4`
    font-size: 36px;
    margin-left: 118px;
    color: ${(props) => props.colorbigtext};

    `
;