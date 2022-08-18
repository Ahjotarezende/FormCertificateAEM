import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  background: ${(props) => props.bgform};

  border-radius: 16px;
  max-width: 40rem;
  min-height: 30rem;
  padding: 2rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ContainerP = styled.p`
  font-size: ${(props) => props.fonte};
  color: ${(props) => props.titlecolor};
  margin-bottom: 1.5rem;
  align-self: flex-start;
  font-weight: bold;
  font-family: ${(props) => props.fonts};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .none {
    display: none;
  }
`;

export const Align = styled.div`
  align-self: flex-start;
`;

export const AlignButton = styled.div`
  align-self: flex-end;
`;

export const InputEmailPhone = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
