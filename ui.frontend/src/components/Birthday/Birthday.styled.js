import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ContainerMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0.5rem 0;
`;
export const ContainerMedia = styled.div`
  display: flex;
  margin: 0 5px;
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;
