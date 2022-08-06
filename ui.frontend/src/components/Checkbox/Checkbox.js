import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { CheckBoxContainer, CheckboxInput } from "./CheckBox.styled";
import Label from "../Micros/Label/Label";

export const Checkbox = ({ type, txtColor, inputColor, text, number }) => {
  if(type) {
    return (
      <CheckBoxContainer>
        <CheckboxInput color={inputColor} type={"checkbox"} id={"checkbox"} checked/>
        <Label text={text} color={txtColor} fontSize={number} />
      </CheckBoxContainer>
    );
  } else {
    return (
      <CheckBoxContainer>
        <CheckboxInput color={inputColor} type={"checkbox"} id={"checkbox"} />
        <Label text={text} color={txtColor} fontSize={number} />
      </CheckBoxContainer>
    );
  }
};
export default MapTo("reactapp/components/checkbox")(Checkbox);
