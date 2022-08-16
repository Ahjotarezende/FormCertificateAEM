import React from 'react'
import { ButtonStyle } from './Button.styled'

const Button = ({leftImage, rightImage, fsbutton, brbutton, txtbutton, colorbutton, bgbutton, onClick, form, type, className}) => {
  return (
    <ButtonStyle
        bgbutton={bgbutton}
        colorbutton={colorbutton}
        brbutton={`${brbutton}px`}
        fsbutton={`${fsbutton}px`}
        leftImage={leftImage}
        rightImage={rightImage}
        onClick={onClick}
        form={form}
        type={type}
        className={className}
    >
        <img src={leftImage.src} className="leftImage" alt="left"/>
        {txtbutton}
        <img src={rightImage.src} className="rightImage" alt="right"/>
    </ButtonStyle>
  )
}

export default Button;