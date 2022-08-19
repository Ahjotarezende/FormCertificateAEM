import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 40rem;
  min-height: 30rem;
  padding: 1rem;
  background: ${(props) => props.bgform};
`;

export const ContainerP = styled.p`
  font-size: 16px;
  width: 40rem;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;

  background: ${(props) => props.bgform};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonStyle = styled.div`
  align-self: flex-end;
`;
