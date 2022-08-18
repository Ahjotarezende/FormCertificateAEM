import React from "react";
import Certificates from "../../components/Certificates/Certificates";
import Header from "../../components/Micros/Header/Header";
import { Title, DivForm } from "./Social.styled";
import Navbar from "../../components/Micros/Navbar/Navbar";
import InputLabel from "../../components/Input+Label/InputLabel";
import Checkbox from "../../components/Checkbox/Checkbox";
import Birthday from "../../components/Birthday/Birthday";
import Button from "../../components/Button/Button";

import { useForm } from "react-hook-form";

const Social = ({
  fonts,
  title,
  titlecolor,
  fonte,
  bgform,
  colorcomp,
  headersocial,
  navsocial,
  inputsocial,
  birthsocial,
  checksocial,
  buttonsocial,
  certsocial,
}) => {
  console.log(inputsocial);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let localValues = Object.entries(data);
    for (let i = 0; i < localValues.length; i++) {
      localStorage.setItem(localValues[i][0], localValues[i][1]);
    }
  };

  return (
    <div>
      {headersocial.map(
        (
          { smalltextsc, bigtextsc, colorbigtextsc, colorsmalltextsc = {} },
          index
        ) => (
          <Header
            key={index}
            smalltext={smalltextsc}
            bigtext={bigtextsc}
            colorbigtext={colorbigtextsc}
            colorsmalltext={colorsmalltextsc}
          />
        )
      )}

      <DivForm bgform={bgform}>
        <Title fonts={fonts} titlecolor={titlecolor} fonte={`${fonte}px`}>
          {title}
        </Title>

        {navsocial.map(
          (
            {
              textonesc,
              texttwosc,
              textthreesc,
              colortextnavsc,
              colorselectedsc,
              fsnavct = {},
            },
            index
          ) => (
            <Navbar
              key={index}
              firstText={textonesc}
              secondText={texttwosc}
              thirdText={textthreesc}
              textColor={colortextnavsc}
              color={colorselectedsc}
            />
          )
        )}

        {certsocial.map(
          (
            {
              labelcertsc,
              colorlabelcertsc,
              colorbtsc,
              leftimagecertsc,
              rightimagecertsc,
              txtcertsc,
              colortxtcertsc,
              fstxtcertsc,
              brbtcertsc,
              bgopcertsc,
              colorbtmoresc,
              leftimagemoresc,
              rightimagemoresc,
              txtmoresc,
              colortxtmoresc,
              fstxtmoresc,
              brbtmoresc,
              colorerrorcertsc,
              phcertsc,
              errortextsc = {},
            },
            index
          ) => (
            <Certificates
              key={index}
              labelcert={labelcertsc}
              colorlabelcert={colorlabelcertsc}
              colorbt={colorbtsc}
              leftimagecert={leftimagecertsc}
              rightimagecert={rightimagecertsc}
              txtcert={txtcertsc}
              colortxtcert={colortxtcertsc}
              fstxtcert={fstxtcertsc}
              brbtcert={brbtcertsc}
              bgopcert={bgopcertsc}
              colorbtmore={colorbtmoresc}
              leftimagemore={leftimagemoresc}
              rightimagemore={rightimagemoresc}
              txtmore={txtmoresc}
              colortxtmore={colortxtmoresc}
              fstxtmore={fstxtmoresc}
              brbtmore={brbtmoresc}
              colorerrorcert={colorerrorcertsc}
              phcert={phcertsc}
              errortext={errortextsc}
              colorcomp={colorcomp}
            />
          )
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputsocial.map(
            (
              {
                textonesc,
                texttwosc,
                textthreesc,
                colortextnavsc,
                colorselectedsc,
                colorcompsc,
                requiredinputsc,
                typeinputsc = {},
              },
              index
            ) => (
              <InputLabel
                key={index}
                textLabel={textonesc}
                colorLabel={colortextnavsc}
                fontSizeLabel='14px'
                placeholder={texttwosc}
                type={typeinputsc}
                color={colorcomp}
                required={requiredinputsc}
                fontSizeInput={colorcompsc}
                borderRadius='4px'
                fsmessage='14'
                fwmessage='400'
                txtmessage={textthreesc}
                colormessage={colorselectedsc}
                register={register}
                errors={errors}
              />
            )
          )}

          {birthsocial.map(
            (
              { labelbirthsc, colorbirthsc, startbirthsc, endbirthsc = {} },
              index
            ) => (
              <Birthday
                key={index}
                labelBirth={labelbirthsc}
                yearEnd={endbirthsc}
                color={colorbirthsc}
                yearBegin={startbirthsc}
              />
            )
          )}

          {checksocial.map(
            (
              {
                textchecksc,
                errorchecksc,
                colorchecksc,
                colortextchecksc,
                colorerrorchecksc,
                fschecksc,
                checksc,
                roundsc,
                requiredchecksc = {},
              },
              index
            ) => (
              <Checkbox
                key={index}
                type={checksc}
                round={roundsc}
                txtColor={colortextchecksc}
                inputColor={colorchecksc}
                text={textchecksc}
                number={`${fschecksc}`}
              />
            )
          )}

          {buttonsocial.map(
            (
              {
                txtbuttonsc,
                colorbuttonsc,
                colortxtbuttonsc,
                fsbuttonsc,
                brbuttonsc,
                leftimagesc,
                rightimagesc = {},
              },
              index
            ) => (
              <Button
                key={index}
                leftImage={leftimagesc}
                rightImage={rightimagesc}
                fsbutton={fsbuttonsc}
                bgbutton={colorbuttonsc}
                type='submit'
                brbutton={brbuttonsc}
                txtbutton={txtbuttonsc}
                colorbutton={colortxtbuttonsc}
              />
            )
          )}
        </form>
      </DivForm>
    </div>
  );
};

Social.defaultProps = {
  headersocial: [
    {
      smalltextsc: "Forms",
      bigtextsc: "Social Tab",
      colorbigtextsc: "#074EE8",
      colorsmalltextsc: "#111111",
    },
  ],
  navsocial: [
    {
      textonesc: "first",
      texttwosc: "second",
      textthreesc: "third",
      colortextnavsc: "#111111",
      colorselectedsc: "#074EE8",
      fsnavsc: "16px",
    },
  ],
  buttonsocial: [
    {
      txtbuttonsc: "Insert Text",
      colorbuttonsc: "#074EE8",
      colortxtbuttonsc: "#FFFFFF",
      fsbuttonsc: 16,
      brbuttonsc: 4,
      leftimagesc: {
        src: "",
      },
      rightimagesc: {
        src: "",
      },
    },
  ],
  checksocial: [
    {
      textchecksc: "I accept the terms and privacy",
      errorchecksc: "Please confirm the terms",
      colorchecksc: "#074EE8",
      colortextchecksc: "#111111",
      colorerrorchecksc: "#FF0000",
      fschecks: "16px",
      checksc: false,
      roundsc: false,
      requiredchecksc: true,
    },
  ],
  birthsocial: [
    {
      labelbirthsc: "Birthday *",
      colorbirthsc: "#767676",
      startbirthsc: 1900,
      endbirthsc: 2022,
    },
  ],
  inputsocial: [
    {
      textonesc: "Insert Label",
      texttwosc: "Insert Placeholder.",
      textthreesc: "Error Message",
      colortextnavsc: "#767676",
      colorselectedsc: "#FF0000",
      colorcompsc: "16px",
      typeinputsc: "text",
      requiredinputsc: true,
    },
  ],
  
  certsocial: [
    {
      colorbtsc: "#074EE8",
      leftimagecertsc: {
        src: "",
      },
      rightimagecertsc: {
        src: "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-Down-arrows-tanah-basah-glyph-tanah-basah-5.png",
      },
      txtcertsc: "Certificates",
      colortxtcertsc: "#FFFFFF",
      fstxtcertsc: 16,
      brbtcertsc: 4,
      bgopcertsc: "#074EE8",
      colorbtmoresc: "#074EE8",
      leftimagemoresc: {
        src: "https://img.icons8.com/ios-glyphs/30/FFFFFF/plus-math.png",
      },
      rightimagemoresc: {
        src: "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-Right-arrows-tanah-basah-glyph-tanah-basah-3.png",
      },
      txtmoresc: "More",
      colortxtmoresc: "#FFFFFF",
      fstxtmoresc: 16,
      brbtmoresc: 4,
      colorerrorcertsc: "#FF0000",
      phcertsc: "https://www.linkedin.com/in/foo-bar-3a0560104/",
      errortextsc: "Empty certificate is not allowed.",
    },
  ],
};

export default Social;
