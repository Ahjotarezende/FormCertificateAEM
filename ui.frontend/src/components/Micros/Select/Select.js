import React from 'react'
import { SelectMicro } from './Select.styled'

const Select = (props) => {
  let arrayOptions = [];
  for(let i=props.inicio, j=0; i<=props.fim; i++, j++){
        arrayOptions[j]=String(i).padStart(2,'0')
  }
  return (
    <SelectMicro
        wselect={props.wselect}
        brselect={`${props.brselect}px`}
        fsslect={`${props.fsselect}px`}
        colorselect={props.colorselect}
        cbselect={props.cbselect}

    >
        {arrayOptions.map((rdm, i) => (
            <option key={i} value={rdm}>{rdm}</option>
        ))}
    </SelectMicro>
  )
}

export default Select;