import styled from "styled-components";

export const DivHeader = styled.div`
  background-color: transparent;
  border-bottom: 2px solid #aaaaaa;
  display: flex;
  flex-direction: column;
  padding: 3em 0;
`;

export const SmallText = styled.h4`
  font-size: 15px;
  margin-left: 120px;
  color: ${(props) => props.colorsmalltext};
  font-family: "Inter", sans-serif;
`;

export const BigText = styled.h4`
  font-size: 36px;
  margin-left: 118px;
  color: ${(props) => props.colorbigtext};
  font-family: "Inter", sans-serif;
`;
