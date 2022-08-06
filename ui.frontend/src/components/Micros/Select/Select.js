import React from 'react'
import { SelectMicro } from './Select.styled'

const Select = (props) => {
  let arrayOptions = [];
  for(let i=props.inicio, j=0; i<=props.fim; i++, j++){
        arrayOptions[j]=i
  }
  return (
    <SelectMicro
        borderradius={`${props.brselect}px`}
        fsslect={`${props.fsselect}px`}
        colortext={props.colorselect}
        colorborder={props.cbselect}
    >
        {arrayOptions.map((rdm, i) => (
            <option key={i} value={rdm}>{rdm}</option>
        ))}
    </SelectMicro>
  )
}

export default Select;