import React from "react";
import { SelectMicro } from "./Select.styled";

const Select = (props) => {
  const { setAge } = props;
  let arrayOptions = [];

  for (let i = props.inicio, j = 0; i <= props.fim; i++, j++) {
    arrayOptions[j] = String(i).padStart(2, "0");
  }
  return (
    <SelectMicro
      wselect={props.wselect ? props.wselect : 400}
      brselect={props.brselec ? `${props.brselect}px` : "4px"}
      fsslect={props.fsselect ? `${props.fsselect}px` : "16px"}
      colorselect={props.colorselect ? props.colorselect : "#000"}
      cbselect={props.cbselect ? props.cbselect : "#aaaaaa"}
      onChange={(e) => {
        setAge(2022 - e.target.value);
      }}
    >
      {arrayOptions.map((rdm, i) => (
        <option key={i} value={rdm}>
          {rdm}
        </option>
      ))}
    </SelectMicro>
  );
};

export default Select;
