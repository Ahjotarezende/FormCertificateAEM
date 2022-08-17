import React, { useState } from "react";
import {
  Container,
  ContainerInput,
  ContainerInputBirthday,
  ContainerInputPhone,
} from "./Input.styled";
function Input({
  type,
  placeholder,
  inputName,
  color,
  valor,
  fontSize,
  borderRadius,
  register
}) {

  const viewValue = () => {
    if(valor===false)
      return true
    else
      return false
  }

  const [age, setAge] = useState(50);
  const getTypeInput = (type, register) => {
    switch (type) {
      case "text":
        return (
          <Container>
            <ContainerInput
              placeholder={placeholder}
              type='text'
              fontSize={fontSize}
              color={color}
              borderRadius={borderRadius}
               onChange={(e) => {
                 localStorage.setItem(`${inputName}`, e.target.value);
               }}
              {...register(`${inputName}`, { required: viewValue()})}      
            />
          </Container>
        );
      case "number":
        return (
          <Container>
            <ContainerInputPhone
              placeholder={placeholder}
              type='text'
              maxLength='11'
              font-size={fontSize}
              color={color}
              borderRadius={borderRadius}
               onChange={(e) => {
                 localStorage.setItem(`${inputName}`, e.target.value);
               }}
              {...register(`${inputName}`, { required: viewValue()})}      
 
            />
          </Container>
        );
      case "email":
        return (
          <Container>
            <ContainerInput
              placeholder={placeholder}
              type='email'
              color={color}
              font-size={fontSize}
              borderRadius={borderRadius}
               onChange={(e) => {
                 localStorage.setItem(`${inputName}`, e.target.value);
               }}
              {...register(`${inputName}`, viewValue())}    
  
            />
          </Container>
        );
      case "birthday":
        return (
          <Container>
            <ContainerInputBirthday
              type='number'
              font-size={fontSize}
              color={color}
              borderRadius={borderRadius}
              value={age}
              disabled
               onChange={(e) => {
                 localStorage.setItem(`${inputName}`, e.target.value);
               }}
            />
          </Container>
        );
      default:
        return <Container>set input</Container>;
    }
  };
  return <div>{getTypeInput(type, register)}</div>;
}


export default Input;
