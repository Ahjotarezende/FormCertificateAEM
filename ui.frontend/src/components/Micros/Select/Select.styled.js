import styled from "styled-components";

export const SelectMicro = styled.select`
  cursor: pointer;
  font-family: "Nunito";
  border: 2px solid ${(props) => props.cbselect};
  border-radius: ${(props) => props.brselect};
  font-weight: ${(props) => props.wselect};
  color: ${(props) => props.colorselect};
  font-size: ${(props) => props.fsslect};
  padding-left: 0.6rem;
  background-image: url("https://img.icons8.com/ios-glyphs/30/000000/expand-arrow--v1.png");
  width: 7.18rem;
  height: 2.5rem;
  background-size: 0.95rem;
  background-repeat: no-repeat;
  background-position: 85%;
  appearance: none;
  margin-right: 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
`;
