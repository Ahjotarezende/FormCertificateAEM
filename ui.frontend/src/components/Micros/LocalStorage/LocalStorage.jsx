import React from "react";
import Text from "../Micro/Text/Text";
import { LocalStyled } from "./LocalText.styled";

export const LocalText = ({ title, content }) => {
  if (content === null) {
    console.log("null");
  } else if (content == "") {
    console.log("empty");
  } else {
    return (
      <LocalStyled>
        <Text container={"sucess"} text={title + content} />
      </LocalStyled>
    );
  }
};

