import React, { useState } from "react";
import {
  Container,
  ContainerBirtthday,
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
              fontSize={fontSize}
              color={color}
              borderRadius={borderRadius}
              onChange={(e) => {
                localStorage.setItem(`${inputName}`, e.target.value);
              }}
            />
          </Container>
        );
      case "url":
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
      case "password":
        return (
          <Container>
            <ContainerInput
              placeholder={placeholder}
              type='password'
              fontSize={fontSize}
              color={color}
              borderRadius={borderRadius}
              onChange={(e) => {
                localStorage.setItem(`${inputName}`, e.target.value);
              }}
            />
          </Container>
        );
      case "tel":
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
          <ContainerBirtthday>
            <ContainerInputBirthday
              type='number'
              font-size={fontSize}
              color={color}
              borderRadius={borderRadius}
              value={valueAge}
              disabled
              onChange={(e) => {
                localStorage.setItem(`${inputName}`, e.target.value);
              }}
            />
          </ContainerBirtthday>
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
