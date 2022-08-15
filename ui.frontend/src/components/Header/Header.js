import React from 'react'
import { DivHeader, SmallText, BigText } from './Header.styled'

const Header = ({smalltextbs, bigtextbs, colorbigtextbs, colorsmalltextbs}) => {
  return (
    <DivHeader>
        <SmallText
            colorsmalltextbs={colorsmalltextbs}
        >
            {smalltextbs}
        </SmallText>
        <BigText
            colorbigtextbs={colorbigtextbs}
        >
            {bigtextbs}
        </BigText>
    </DivHeader>
  )
}

Header.defaultProps = {
    headerbasic: [
      {
        smalltextbs: "Oi",
        bigtextbs: "Ola",
        colorsmalltextbs: "#000000",
        colorbigtextbs: "#777777"
      }
    ]
  }


export default Header

