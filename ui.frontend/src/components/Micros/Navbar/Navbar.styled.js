import styled from "styled-components";
import { css } from "styled-components";

export const NavStyled = styled.div`
  width: 33rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    width: 85vw;
  }

  @media (max-width: 375px) {
    width: 95vw;
  }
`;

export const NavText = styled.p`
  display: flex;
  width: 100%;
  justify-content: space-around;
  border-bottom: 2px solid ${(props) => props.colorcomp};
  cursor: pointer;
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize};

  padding: 0.8rem;

  ${(props) =>
    props.className === "true" &&
    css`
      padding-bottom: calc(0.8rem - 1px);
      border-bottom: 3px solid ${(props) => props.color};
      color: ${(props) => props.color}; ;
    `};
`;
