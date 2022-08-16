import React, { useState } from "react";
import { NavStyled, NavText } from "./Navbar.styled";

function Navbar({ firstText, secondText, thirdText, textColor, color }) {
  const [page,setPage] = useState(0)
  let tabA,tabB,tabC,Nav
  

  if(page == 0) {
    tabA = "true"
  } else if (page == 1) {
    tabB = "true"
  } else if (page == 2 ) {
    tabC = "true"
  } else if ( page == 3) {
    Nav = "sucess"
  } 


  return (
    <NavStyled>
      <NavText className={tabA}  color={color} textColor={textColor}  onClick={() => setPage(0)}>{firstText}</NavText>
      <NavText className={tabB}  color={color} textColor={textColor}  onClick={() => setPage(1)}>{secondText}</NavText>
      <NavText  className={tabC} color={color} textColor={textColor}  onClick={() => setPage(2)}> {thirdText}</NavText>
    </NavStyled>
  );
}


Navbar.defaultProps = {
 color: "#074ee8",
 textColor: "#074ee8",
 firstText: "First Tab",
 secondText: "Second Tab",
 thirdText: "Third Tab"
}
  

export default Navbar;