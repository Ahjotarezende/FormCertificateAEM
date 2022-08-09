import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { CheckBoxContainer, CheckboxInput } from "./CheckBox.styled";
import { useState } from "react";

import Label from "../Micros/Label/Label";

export const Checkbox = ({ type , txtColor, inputColor, text, number }) => {
  const [checked, setChecked] = useState(true)
  const handleClick = () => setChecked(!checked)

  const defaulttxt = "Insert checkbox text"
    if(type) {
      return (
        <CheckBoxContainer >
          <CheckboxInput  onClick={handleClick} color={inputColor} type={"checkbox"} id={"checkbox"} checked={checked}/>
          <Label text={text ? text : defaulttxt} color={txtColor} fontSize={number} />
        </CheckBoxContainer>
      );
    } else {
      return (
        <CheckBoxContainer >
          <CheckboxInput  onClick={handleClick} color={inputColor} type={"checkbox"} id={"checkbox"}/>
          <Label text={text ? text : defaulttxt} color={txtColor} fontSize={number} />
        </CheckBoxContainer>
      );
    }
};
export default MapTo("reactapp/components/checkbox")(Checkbox);
