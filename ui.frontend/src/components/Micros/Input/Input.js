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
  fontSize,
  borderRadius,
}) {
  const [age, setAge] = useState(50);
  const getTypeInput = (type) => {
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
  return <div>{getTypeInput(type)}</div>;
}

Input.defaultProps = {
  type: "text",
  placeholder: "Eu sou um placeholder",
  inputName: "inputName",
  color: "#aaaaaa",
  fontSize: "16px",
  borderRadius: "4px",
};

export default Input;
