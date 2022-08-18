import styled from "styled-components";

export const SelectMicro = styled.select`
  cursor: pointer;
  font-family: "Nunito";
  font-weight: ${(props) => props.wselect};
  border-color: ${(props) => props.cbselect};
  font-size: ${(props) => props.fsslect};
  border-radius: ${(props) => props.brselect};
  padding-left: 0.6rem;
  background-image: url("https://img.icons8.com/ios-glyphs/30/000000/expand-arrow--v1.png");
  width: 7.18rem;
  height: 2.5rem;
  background-size: 0.95rem;
  background-repeat: no-repeat;
  background-position: 85%;
  margin-right: 1rem;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;
