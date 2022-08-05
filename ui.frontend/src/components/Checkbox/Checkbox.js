import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { CheckBoxContainer, CheckboxInput } from "./CheckBox.styled";

import Label from "../Micros/Label/Label"

export const Checkbox = ({inputColor}) => {
  return (
    <CheckBoxContainer color={inputColor}>
      <CheckboxInput type={"checkbox"} id={"checkbox"}/>
      
    </CheckBoxContainer>
  );
};
export default MapTo("reactapp/components/checkbox")(Checkbox);
