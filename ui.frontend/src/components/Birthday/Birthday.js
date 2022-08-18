import React, { useState, useEffect } from "react";
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
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  useEffect(() => {
    localStorage.setItem("date", day + "/" + month + "/" + year);
    localStorage.setItem("age", yearEnd - year);
  }, [day, month, year]);
  return (
    <Body className={className}>
      <ContainerMessage>
        <Label text={labelBirth} />
        {/* <ErrorMessage
          txtmessage='Please enter your Age'
          colormessage='red'
          className={className}
        /> */}
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
            setDay={setDay}
          />
          <Select
            inicio={1}
            fim={12}
            brselect={4}
            fsslect={16}
            cbselect={color}
            setMonth={setMonth}
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
            setYear={setYear}
          />
          <Input
            type='birthday'
            inputName='birthday'
            valueAge={yearEnd - year}
          />
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
