import React from "react";
import Input from "../Micros/Input/Input";
import Label from "../Micros/Label/Label";
import ErrorMessage from "../Micros/ErrorMessage/ErrorMessage";
import { Container, ContainerLabelError } from "./InputLabel.styled";

function InputLabel(props) {
  const { textLabel, colorLabel, fontSizeLabel } = props;
  const {
    placeholder,
    type,
    inputName,
    color,
    fontSizeInput,
    borderRadius,
    className,
    register,
    required,
  } = props;
  const { fsmessage, fwmessage, txtmessage, colormessage, errors } = props;

  return (
    <Container className={className}>
      <ContainerLabelError>
        <Label text={textLabel} color={colorLabel} fontSize={fontSizeLabel} />
        {/* <ErrorMessage
          fsmessage={fsmessage}
          fwmessage={fwmessage}
          errors={errors}
          className={textLabel}
          txtmessage={txtmessage}
          colormessage={colormessage}
        /> */}
      </ContainerLabelError>
      <Input
        type={type}
        placeholder={placeholder}
        color={color}
        inputName={textLabel}
        fontSize={fontSizeInput}
        borderRadius={borderRadius}
        register={register}
        valor={required}
      />
    </Container>
  );
}

export default InputLabel;
