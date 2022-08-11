import React, { useState } from "react";
import Select from "../Micros/Select";
import Input from "../Input";
import { Container, ContainerMedia } from "./Birthday.styled";
function Birthday() {
  const [age, setAge] = useState(0);
  return (
    <Container>
      <ContainerMedia>
        <Select
          inicio={1}
          fim={31}
          brselect={2}
          fsslect={16}
          colorselect='aaaaaa'
          cbselect='#aaaaaa'
        />
        <Select
          inicio={1}
          fim={12}
          brselect={4}
          fsslect={16}
          cbselect='#aaaaaa'
        />
      </ContainerMedia>
      <ContainerMedia>
        <Select
          inicio={1900}
          fim={2022}
          brselect={4}
          fsslect={16}
          colorselect='red'
          cbselect='#aaaaaa'
          setAge={setAge}
        />
        <Input type='birthday' inputName='birthday' valueAge={age} />
      </ContainerMedia>
    </Container>
  );
}

export default Birthday;
