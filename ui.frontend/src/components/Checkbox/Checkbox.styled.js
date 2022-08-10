import styled from "styled-components";

export const CheckBoxContainer = styled.div`
  margin: 1rem;
  display: flex;
  max-width: 36rem;
`;

export const CheckboxInput = styled.input`
  margin: 0.75rem;
  width: 1.25rem;
  accent-color: ${(props) => props.color};
`;
