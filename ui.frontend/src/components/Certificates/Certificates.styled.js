import styled from "styled-components"

export const InputCert = styled.input`
    padding: 0;
    width: 97%;
    background-color: transparent;
    border: 2px solid;
    border-color: ${(props) => props.color};
    margin-bottom: 1.8rem;
    border-radius: 4px;
    padding: 0.75rem 0 0.75rem 0.75rem;
    @media (max-width: 415px){
        padding: 0.5rem 0 0.5rem 0.5rem;
    }
`;

export const DivCertificate = styled.div`
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 2.31rem;
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
    width: 100%;
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
    height: 4.93rem;
`;

export const DivCert = styled.div`
    display: flex;
    align-items: flex-start;
    width: 53.6%;
    flex-direction: column;
    .big{
        max-width: 11.68rem;
        z-index: 1;
        cursor: pointer;
        padding-left: 2.59rem;
        padding-right: 2.59rem;
    }
    .noneBig{
        display: none;
    }
`;

export const DivOptions = styled.div`
    &.not, &#delOption0, &#delOption1, &#delOption2, &#delOption3, &#delOption4{
        display: none;
    }
    width: 11.68rem;
    font-size: 11px;
    padding-right: 0.31rem;
    background-color: ${(props) => props.bgopcert};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    bottom: 0.31rem;
    padding: 0.43rem 0 0.06rem 0;
    z-index: 0;
    p{
        margin-left: 0.18rem;
        color: white;
        overflow: hidden;
    }
    button{
        margin-top: 0.06rem;
        color: white;
        font-size: 11px;
        text-align: end;
        background-color: transparent;
        border: none;
        width: 1.40rem;
        height: 0.96rem;
        border-bottom: 1px solid white;
        cursor: pointer;
    }
`;