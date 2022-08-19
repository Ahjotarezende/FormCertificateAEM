import styled from "styled-components"

export const Title = styled.p`
    font-family: ${(props) => props.fonts}, sans-serif;
    font-weight: 600;
    font-size: ${(props) => props.fonte};
    color: ${(props) => props.titlecolor};
    margin-bottom: 33px;
    @media (max-width: 768px) {
        margin-top: 40px;
  }
  @media (max-width: 415px){
        margin-bottom: 25px;
    }
`;

export const DivForm = styled.div`
    background-color: ${(props) => props.bgform};
    box-sizing: border-box;
    width: 617px;
    height: 733px;
    .none{
        display: none;
    }
    border-radius: 20px;
    margin: 0 auto;
    padding: 40px 35px 0px 67px;
    display: flex;
    flex-direction: column;
    form{
        display: flex;
        flex-direction: column;
        button{
            align-self: flex-end;
        }
    }
    
    @media (max-width: 768px) {
        width: 100vw;
        padding: 0;
        height: 93vh;
        border-radius: 0;
        padding: 0 30px;
  }
    @media (max-width: 415px){
        height: 100vh;
    }
`;