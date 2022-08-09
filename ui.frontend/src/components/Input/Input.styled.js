import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";
export const Container = styled.div`
  display: flex;
  width: 50vw;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex: 1;
  @media (max-width: 768px) {
    height: 4.5rem;
  }
`;

export const ContainerInput = styled.input`
  border: 0.125rem solid ${(props) => props.color};
  box-sizing: border-box;
  border-radius: 4px;
  height: 2rem;
  padding: 1rem 0.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const ContainerInputBirthday = styled.input`
  border: 0.125rem solid ${(props) => props.color};
  box-sizing: border-box;
  border-radius: 4px;
  height: 2rem;
  padding: 1rem 0.5rem;
  margin-bottom: 1.5rem;
  width: 20%;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const ContainerInputPhone = styled.input`
  border: 0.125rem solid ${(props) => props.color};
  box-sizing: border-box;
  border-radius: 4px;
  height: 2rem;
  padding: 1rem 0.5rem;
  margin-bottom: 1.5rem;
  width: 50%;

  @media (max-width: 768px) {
    width: 60%;
  }
`;
