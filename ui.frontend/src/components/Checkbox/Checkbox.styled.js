import styled from "styled-components";

export const CheckBoxContainer = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  max-width: 36rem;
  cursor: pointer;

`;

export const CheckCircleInput = styled.input`
  margin: 12px;
  width: 20.8px;
  height: 20.8px;
  min-height: 20.8px;
  min-width: 20.8px;

  border-radius: 50%;
  border: 2px solid #8f8f9d;
  appearance: none;
  -webkit-appearance: none;
  outline: none;

  &:checked {
    background-color: ${(props) => props.color};
  }
`;

export const CheckBoxInput = styled.input`
  margin: 12px;
  width: 1.25rem;
  height: 1.25rem;
  accent-color: ${(props) => props.color};
`;
