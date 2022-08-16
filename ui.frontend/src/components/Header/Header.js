import React from "react";
import { DivHeader, SmallText, BigText } from "./Header.styled";

const Header = ({ smalltext, bigtext, colorbigtext, colorsmalltext }) => {
  return (
    <DivHeader>
      <SmallText colorsmalltext={colorsmalltext}>{smalltext}</SmallText>
      <BigText colorbigtext={colorbigtext}>{bigtext}</BigText>
    </DivHeader>
  );
};

export default Header;
