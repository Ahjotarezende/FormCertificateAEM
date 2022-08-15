import React from "react";
import Input from "../Micros/Input/Input";
import Label from "../Micros/Label/Label";
import ErrorMessage from "../Micros/ErrorMessage/ErrorMessage";
import { Container, ContainerLabelError } from "./InputLabel.styled";

function InputLabel(props) {
  const { textLabel, colorLabel, fontSizeLabel } = props;
  const { placeholder, type, inputName, color, fontSizeInput, borderRadius } =
    props;
  const { fsmessage, fwmessage, txtmessage, colormessage, errors } = props;

  return (
    <Container>
      <ContainerLabelError>
        <Label text={textLabel} color={colorLabel} fontSize={fontSizeLabel} />
        <ErrorMessage
          fsmessage={fsmessage}
          fwmessage={fwmessage}
          errors={errors}
          className={inputName}
          txtmessage={txtmessage}
          colormessage={colormessage}
        />
      </ContainerLabelError>
      <Input
        type={type}
        placeholder={placeholder}
        color={color}
        inputName={inputName}
        fontSize={fontSizeInput}
        borderRadius={borderRadius}
      />
    </Container>
  );
}

export default InputLabel;
