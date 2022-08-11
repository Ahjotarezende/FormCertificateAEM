import React from "react";
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
  fontSize,
  borderRadius,
  valueAge,
}) {
  const getTypeInput = (type) => {
    switch (type) {
      case "text":
        return (
          <Container>
            <ContainerInput
              placeholder={placeholder}
              type='text'
              fontSize={fontSize ? fontSize : "16px"}
              color={color ? color : "#aaaaaa"}
              onChange={(e) => {
                localStorage.setItem(`${inputName}`, e.target.value);
              }}
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
              font-size={fontSize ? fontSize : "16px"}
              color={color ? color : "#aaaaaa"}
              onChange={(e) => {
                localStorage.setItem(`${inputName}`, e.target.value);
              }}
            />
          </Container>
        );
      case "email":
        return (
          <Container>
            <ContainerInput
              placeholder={placeholder}
              type='email'
              color={color ? color : "#aaaaaa"}
              font-size={fontSize ? fontSize : "16px"}
              onChange={(e) => {
                localStorage.setItem(`${inputName}`, e.target.value);
              }}
            />
          </Container>
        );
      case "birthday":
        return (
          <Container>
            <ContainerInputBirthday
              type='number'
              font-size={fontSize ? fontSize : "16px"}
              color={color ? color : "#aaaaaa"}
              value={valueAge}
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
  return <div>{getTypeInput(type)}</div>;
}

export default Input;
