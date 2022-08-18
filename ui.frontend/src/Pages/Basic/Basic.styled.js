import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  background: ${(props) => props.bgform};

  border-radius: 16px;
  width: 38.5rem;
  min-height: 47.6rem;
  padding: 2rem;
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
