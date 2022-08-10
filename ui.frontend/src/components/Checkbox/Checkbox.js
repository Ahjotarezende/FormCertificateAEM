import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { CheckBoxContainer, CheckboxInput } from "./CheckBox.styled";
import { useState } from "react";

import Label from "../Micros/Label/Label";

export const Checkbox = ({ type , txtColor, inputColor, text, number }) => {
  const [checked, setChecked] = useState(true)

  return (
    <CheckBoxContainer  role="checkbox" tabindex="0" title={text} onClick={() => setChecked(current => !current)} aria-label={type? checked : !checked}>
      <CheckboxInput color={inputColor} type={"checkbox"}  id={"checkbox"} title={text} aria-label={text}  checked={type? checked : !checked} />
      <Label text={text} color={txtColor} fontSize={number} />
    </CheckBoxContainer>
  );
};


Checkbox.defaultProps = {
  text: "Insert Text Here"
}
  
export default MapTo("reactapp/components/checkbox")(Checkbox);
