import React, { useState } from "react";
import { NavStyled, NavText } from "./Navbar.styled";

import { AuthContext } from "../../../Pages/General/General";

function Navbar({
  firstText,
  secondText,
  thirdText,
  textColor,
  color,
  colorcomp,
}) {
  const { name } = React.useContext(AuthContext); //page authcontext
  const [page, setPage] = name; //page state

  let tabA, tabB, tabC, Nav;

  if (page == 1) {
    console.log(page)
    tabA = "true";
  } else if (page == 2) {
    console.log(page)
    tabB = "true";
  } else if (page == 3) {
    console.log(page)
    tabC = "true";
  } else if (page == 4) {
    console.log(page)
    Nav = "sucess";
  }

  

  return (
    <NavStyled>
      <NavText
        className={tabA}
        colorcomp={colorcomp}
        color={color}
        textColor={textColor}
        onClick={() => setPage(1)}
      >
        {firstText}
      </NavText>
      <NavText
        className={tabB}
        colorcomp={colorcomp}
        color={color}
        textColor={textColor}
        onClick={() => setPage(2)}
      >
        {secondText}
      </NavText>
      <NavText
        className={tabC}
        colorcomp={colorcomp}
        color={color}
        textColor={textColor}
        onClick={() => setPage(3)}
      >
        {" "}
        {thirdText}
      </NavText>
    </NavStyled>
  );
}

Navbar.defaultProps = {
  color: "#074ee8",
  textColor: "#074ee8",
  firstText: "First Tab",
  secondText: "Second Tab",
  thirdText: "Third Tab",
};

export default Navbar;
