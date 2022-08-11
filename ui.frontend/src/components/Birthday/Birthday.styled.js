import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContainerMedia = styled.div`
  display: flex;
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;
