import React from "react";
import { LabelText } from "./Label.styled";
function Label({ text, color, fontSize }) {
  return (
    <LabelText color={color} fontSize={fontSize}>
      {text}
    </LabelText>
  );
}

export default Label;
