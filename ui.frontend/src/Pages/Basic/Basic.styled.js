import styled from "styled-components";

export const FontFamily = styled.div`
  font-family: ${(props) => props.fonts};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 16px;
  width: 38.5rem;
  min-height: 47.6rem;
  padding: 2rem;
`;
export const ContainerP = styled.p`
  font-size: 18px;
  margin-bottom: 1.5rem;
  align-self: flex-start;
  font-weight: bold;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
