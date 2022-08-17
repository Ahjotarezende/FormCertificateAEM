import styled from "styled-components"

export const InputCert = styled.input`
    padding: 0;
    width: 97%;
    background-color: transparent;
    border: 2px solid;
    border-color: ${(props) => props.color};
    margin-bottom: 1.8rem;
    border-radius: 4px;
    padding: 12px 0 12px 12px;
`;

export const DivCertificate = styled.div`
    padding: 0;
    width: 550px;
    display: flex;
    flex-direction: column;
`;

export const Empty = styled.p`
    color: ${(props) => props.color};
    font-size: 13px;
    &.notView{
        display: none;
    }
    margin: 0;
    padding: 0;
`;

export const DivMore = styled.div`
    width: 255px;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: flex-end;
    align-self: flex-start;
`;

export const DivButtons = styled.div`
    display: flex;
    height: 79px;
`;

export const DivCert = styled.div`
    display: flex;
    align-items: flex-start;
    width: 53.6%;
    flex-direction: column;
    .big{
        max-width: 187px;
        z-index: 1;
        cursor: pointer;
        padding-left: 41.5px;
        padding-right: 41.5px;
    }
`;

export const DivOptions = styled.div`
    &.not, &#delOption0, &#delOption1, &#delOption2, &#delOption3, &#delOption4{
        display: none;
    }
    width: 187px;
    font-size: 11px;
    padding-right: 5px;
    background-color: ${(props) => props.bgopcert};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    bottom: 5px;
    padding: 7px 0 1px 0;
    z-index: 0;
    p{
        margin-left: 3px;
        color: white;
        overflow: hidden;
    }
    button{
        margin-top: 1px;
        color: white;
        font-size: 11px;
        text-align: end;
        background-color: transparent;
        border: none;
        width: 22.5px;
        height: 15.5px;
        border-bottom: 1px solid white;
        cursor: pointer;
    }
`;
