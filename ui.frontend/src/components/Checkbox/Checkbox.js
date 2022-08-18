import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import {
  CheckBoxContainer,
  CheckBoxInput,
  CheckCircleInput,
} from "./Checkbox.styled";
import { useState } from "react";

import Label from "../Micros/Label/Label";

export const Checkbox = ({
  type,
  round,
  txtColor,
  inputColor,
  text,
  number,
  required,
  className,
}) => {
  const [checked, setChecked] = useState(true);
  if (round) {
    return (
      //round checkbox
      <CheckBoxContainer
        className={className}
        role='checkbox'
        tabindex='0'
        title={text}
        onClick={() => setChecked((current) => !current)}
        aria-label={type ? checked : !checked}
      >
        <CheckCircleInput
          color={inputColor}
          type={"checkbox"}
          id={"checkbox"}
          title={text}
          aria-label={text}
          checked={type ? checked : !checked}
        />
        <Label text={text} color={txtColor} fontSize={number} />
      </CheckBoxContainer>
    );
  } else {
    return (
      //square checkbox
      <CheckBoxContainer
        className={className}
        role='checkbox'
        tabindex='0'
        title={text}
        onClick={() => setChecked((current) => !current)}
        aria-label={type ? checked : !checked}
      >
        <CheckBoxInput
          color={inputColor}
          type={"checkbox"}
          id={"checkbox"}
          title={text}
          aria-label={text}
          checked={type ? checked : !checked}
        />
        <Label text={text} color={txtColor} fontSize={number} />
      </CheckBoxContainer>
    );
  }
};

export default MapTo("reactapp/components/checkbox")(Checkbox);
