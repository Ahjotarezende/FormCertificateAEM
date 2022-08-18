import React from "react";
import { ButtonStyle } from "./Button.styled";

const Button = ({
  leftImage,
  rightImage,
  fsbutton,
  brbutton,
  txtbutton,
  colorbutton,
  bgbutton,
  form,
  type,
  className,
  ...props
}) => {
  return (
    <ButtonStyle
      bgbutton={bgbutton}
      colorbutton={colorbutton}
      brbutton={`${brbutton}px`}
      fsbutton={`${fsbutton}px`}
      leftImage={leftImage}
      rightImage={rightImage}
      form={form}
      type={type}
      className={className}
      {...props}
    >
      <img src={leftImage.src} className='leftImage' alt='left' />
      {txtbutton}
      <img src={rightImage.src} className='rightImage' alt='right' />
    </ButtonStyle>
  );
};

Button.defaultProps = {
  leftImage: "https://via.placeholder.com/150",
  rightImage: "https://via.placeholder.com/150",
  fsbutton: "16",
  brbutton: "2",
  txtbutton: "Button",
  colorbutton: "#000000",
  bgbutton: "#ffffff",
  onClick: () => {},
  form: "",
  type: "submit",
};
export default Button;
