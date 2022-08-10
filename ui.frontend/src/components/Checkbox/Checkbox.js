import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { CheckBoxContainer, CheckboxInput } from "./CheckBox.styled";
import { useState } from "react";

import Label from "../Micros/Label/Label";

export const Checkbox = ({ type , txtColor, inputColor, text, number }) => {
  const [checked, setChecked] = useState(true)
  const handleClick = () => setChecked(!checked)

    if(type) {
      return (
        <CheckBoxContainer role="checkbox" onClick={handleClick} tabindex="0" title={text}>
          <CheckboxInput color={inputColor} type={"checkbox"} id={"checkbox"} title={text} aria-label={text} aria-checked={checked} checked={checked}/>
          <Label text={text} color={txtColor} fontSize={number} />
        </CheckBoxContainer>
      );
    } else {
      return (
        <CheckBoxContainer role="checkbox" onClick={handleClick} tabindex="0" title={text}>
          <CheckboxInput   color={inputColor} type={"checkbox"} id={"checkbox"} title={text} aria-label={text} aria-checked={checked} />
          <Label text={text} color={txtColor} fontSize={number} />
        </CheckBoxContainer>
      );
    }
};


Checkbox.defaultProps = {
  text: "Insert Text Here"
}
  
export default MapTo("reactapp/components/checkbox")(Checkbox);
