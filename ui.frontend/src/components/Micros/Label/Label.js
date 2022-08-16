import React from "react";
import { LabelText } from "./Label.styled";

function Label({ text, color, fontSize }) {
  return (
    <LabelText color={color} fontSize={fontSize}>
      {text}
    </LabelText>
  );
}

Label.defaultProps = {
  color: "#00000",
  text: "Insert label",
};

export default Label;
