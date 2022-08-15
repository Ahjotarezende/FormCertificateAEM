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




export default Header

