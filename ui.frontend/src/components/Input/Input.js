import React, { useState } from "react";
import { Container, ContainerInput } from "./Input.styled";
function Input({ type, color, fontSize }) {
  const [name, setName] = useState("");
  const getTypeInput = (type) => {
    switch (type) {
      case "name":
        return (
          <Container>
            <ContainerInput
              placeholder='Fullname'
              type='text'
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Container>
        );
      case "email":
        return <Container>
        <ContainerInput
          placeholder='Fullname'
          type='text'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Container>;
      case "number":
        return <Container>
        <ContainerInput
          placeholder='Fullname'
          type='text'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Container>;
      case "text":
        return <Container>
        <ContainerInput
          placeholder='Fullname'
          type='text'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Container>;
      default:
        return <Container></Container>;
    }
  };
  return <div>{getTypeInput(type)}</div>;
}

export default Input;
