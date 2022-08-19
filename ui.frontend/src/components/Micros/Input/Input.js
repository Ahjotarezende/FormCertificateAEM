/* eslint-disable no-new-wrappers */
import React, { useState } from "react";
import {
  Container,
  ContainerBirtthday,
  ContainerInput,
  ContainerInputBirthday,
  ContainerInputPhone,
  ContainerInputEmail,
} from "./Input.styled";
import { maskPhone } from "../../../utils/maskPhone";
function Input({
  type,
  placeholder,
  inputName,
  color,
  valor = Boolean,
  fontSize,
  borderRadius,
  valueAge,
  register,
}) {
  const requiredProp = new Boolean(valor);
  console.log(valor);
  const getTypeInput = (type, register) => {
    switch (type) {
      case "text":
        return (
          <Container>
            <ContainerInput
              {...register(`${inputName}`, { required: requiredProp })}
              valor
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
              {...register(`${inputName}`, { required: requiredProp })}
              placeholder={placeholder}
              type='text'
              font-size={fontSize}
              color={color}
              borderRadius={borderRadius}
              onChange={(e) => {
                maskPhone(e);
                localStorage.setItem(`phone`, e.target.value);
              }}
            />
          </Container>
        );
      case "email":
        return (
          <Container>
            <ContainerInputEmail
              {...register(`${inputName}`, requiredProp)}
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
                localStorage.setItem(`birthday`, e.target.value);
              }}
            />
          </ContainerBirtthday>
        );
      default:
        return <Container>set input</Container>;
    }
  };
  return <div>{getTypeInput(type, register)}</div>;
}

export default Input;
