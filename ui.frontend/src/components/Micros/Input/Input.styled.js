import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  @media (max-width: 768px) {
    height: 4.5rem;
  }
`;
export const ContainerBirtthday = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
  @media (max-width: 768px) {
    height: 4.5rem;
  }
`;

export const ContainerInput = styled.input`
  border: 2px solid ${(props) => props.color};
  box-sizing: border-box;
  border-radius: 4px;
  height: 2rem;
  padding: 1rem 0.5rem;
  margin-bottom: 1.5rem;
  width: 555px;
  @media (max-width: 768px) {
    min-width: 20rem;
  }
`;

export const ContainerInputEmail = styled.input`
  border: 2px solid ${(props) => props.color};
  box-sizing: border-box;
  border-radius: 4px;
  height: 2rem;
  padding: 1rem 0.5rem;
  margin-bottom: 1.5rem;
  width: 380px;
  @media (max-width: 768px) {
    width: 555px;
  }
`;

export const ContainerInputBirthday = styled.input`
  border: 2px solid ${(props) => props.color};
  box-sizing: border-box;
  border-radius: 4px;
  height: 2rem;
  padding: 1rem 0.5rem;
  margin-bottom: 1.5rem;
  width: 7.18rem;
  height: 2.5rem;
  text-align: center;
`;

export const ContainerInputPhone = styled.input`
  border: 2px solid ${(props) => props.color};
  box-sizing: border-box;
  border-radius: 4px;
  height: 2rem;
  padding: 1rem 0.5rem;
  margin-bottom: 1.5rem;
  width: 8.5rem;

  @media (max-width: 768px) {
    width: 555px;
  }
`;
