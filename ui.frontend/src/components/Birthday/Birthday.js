import React, { useState } from "react";
import Select from "../Micros/Select/Select";
import Input from "../Micros/Input/Input";
import {
  Body,
  Container,
  
  ContainerMessage,
  ContainerMedia,
} from "./Birthday.styled";
import ErrorMessage from "../Micros/ErrorMessage/ErrorMessage";
import Label from "../Micros/Label/Label";
function Birthday({ yearBegin, yearEnd, color, labelBirth, className }) {
  const [age, setAge] = useState(0);
  return (
    <Body className={className}>
      <ContainerMessage>
        <Label text={labelBirth} />
        {/* <ErrorMessage txtmessage='Please enter your Age' colormessage='red' /> */}
      </ContainerMessage>
      <Container>
        <ContainerMedia>
          <Select
            inicio={1}
            fim={31}
            brselect={2}
            fsslect={16}
            colorselect='aaaaaa'
            cbselect={color}
          />
          <Select
            inicio={1}
            fim={12}
            brselect={4}
            fsslect={16}
            cbselect={color}
          />
        </ContainerMedia>
        <ContainerMedia>
          <Select
            inicio={yearBegin}
            fim={yearEnd}
            brselect={4}
            fsslect={16}
            colorselect='aaaaaa'
            cbselect={color}
            setAge={setAge}
          />
          <Input type='birthday' inputName='birthday' valueAge={age} />
        </ContainerMedia>
      </Container>
    </Body>
  );
}

Birthday.defaultProps = {
  yearBegin: 1900,
  yearEnd: 2022,
  color: "#aaaaaa",
  labelBirth: "Birthday",
};

export default Birthday;
