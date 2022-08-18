import React from "react";
import Certificates from "../../components/Certificates/Certificates";
import Header from "../../components/Micros/Header/Header";
import { Title, DivForm } from "./Certificate.styled";
import Navbar from "../../components/Micros/Navbar/Navbar";
import InputLabel from "../../components/Input+Label/InputLabel";
import Checkbox from "../../components/Checkbox/Checkbox";
import Birthday from "../../components/Birthday/Birthday";
import Button from "../../components/Button/Button";

import { useForm } from "react-hook-form";

const Certificate = ({
  fonts,
  title,
  titlecolor,
  fonte,
  bgform,
  colorcomp,
  headercertificate,
  navcertificate,
  inputcertificate,
  birthcertificate,
  checkcertificate,
  buttoncertificate,
  certcertificate,
}) => {
  console.log(inputcertificate);

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

  const setDisplay = (i) => {
    if (i === 0) return "none";
  };

  return (
    <div>
      {headercertificate.map(
        (
          { smalltextct, bigtextct, colorbigtextct, colorsmalltextct = {} },
          index
        ) => (
          <Header
            key={index}
            smalltext={smalltextct}
            bigtext={bigtextct}
            colorbigtext={colorbigtextct}
            colorsmalltext={colorsmalltextct}
          />
        )
      )}

      <DivForm bgform={bgform}>
        <Title fonts={fonts} titlecolor={titlecolor} fonte={`${fonte}px`}>
          {title}
        </Title>

        {navcertificate.map(
          (
            {
              textonect,
              texttwoct,
              textthreect,
              colortextnavct,
              colorselectedct,
              fsnavct = {},
            },
            index
          ) => (
            <Navbar
              key={index}
              firstText={textonect}
              secondText={texttwoct}
              thirdText={textthreect}
              textColor={colortextnavct}
              color={colorselectedct}
            />
          )
        )}

        {certcertificate.map(
          (
            {
              labelcertct,
              colorlabelcertct,
              colorbtct,
              leftimagecertct,
              rightimagecertct,
              txtcertct,
              colortxtcertct,
              fstxtcertct,
              brbtcertct,
              bgopcertct,
              colorbtmorect,
              leftimagemorect,
              rightimagemorect,
              txtmorect,
              colortxtmorect,
              fstxtmorect,
              brbtmorect,
              colorerrorcertct,
              phcertct,
              errortextct = {},
            },
            index
          ) => (
            <Certificates
              key={index}
              labelcert={labelcertct}
              colorlabelcert={colorlabelcertct}
              colorbt={colorbtct}
              leftimagecert={leftimagecertct}
              rightimagecert={rightimagecertct}
              txtcert={txtcertct}
              colortxtcert={colortxtcertct}
              fstxtcert={fstxtcertct}
              brbtcert={brbtcertct}
              bgopcert={bgopcertct}
              colorbtmore={colorbtmorect}
              leftimagemore={leftimagemorect}
              rightimagemore={rightimagemorect}
              txtmore={txtmorect}
              colortxtmore={colortxtmorect}
              fstxtmore={fstxtmorect}
              brbtmore={brbtmorect}
              colorerrorcert={colorerrorcertct}
              phcert={phcertct}
              errortext={errortextct}
              colorcomp={colorcomp}
            />
          )
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputcertificate.map(
            (
              {
                textonect,
                texttwoct,
                textthreect,
                colortextnavct,
                colorselectedct,
                colorcompct,
                requiredinputct,
                typeinputct = {},
              },
              index
            ) => (
              <InputLabel
                key={index}
                textLabel={textonect}
                colorLabel={colortextnavct}
                fontSizeLabel='14px'
                placeholder={texttwoct}
                type={typeinputct}
                color={colorcomp}
                required={requiredinputct}
                fontSizeInput={colorcompct}
                borderRadius='4px'
                fsmessage='14'
                fwmessage='400'
                txtmessage={textthreect}
                colormessage={colorselectedct}
                register={register}
                errors={errors}
              />
            )
          )}

          {birthcertificate.map(
            (
              { labelbirthct, colorbirthct, startbirthct, endbirthct = {} },
              index
            ) => (
              <Birthday
                key={index}
                className={setDisplay(index)}
                labelBirth={labelbirthct}
                yearEnd={endbirthct}
                color={colorbirthct}
                yearBegin={startbirthct}
              />
            )
          )}

          {checkcertificate.map(
            (
              {
                textcheckct,
                errorcheckct,
                colorcheckct,
                colortextcheckct,
                colorerrorcheckct,
                fscheckct,
                checkct,
                roundct,
                requiredcheckct = {},
              },
              index
            ) => (
              <Checkbox
                key={index}
                className={setDisplay(index)}
                type={checkct}
                round={roundct}
                txtColor={colortextcheckct}
                inputColor={colorcheckct}
                text={textcheckct}
                number={`${fscheckct}`}
              />
            )
          )}

          {buttoncertificate.map(
            (
              {
                txtbuttonct,
                colorbuttonct,
                colortxtbuttonct,
                fsbuttonct,
                brbuttonct,
                leftimagect,
                rightimagect = {},
              },
              index
            ) => (
              <Button
                key={index}
                leftImage={leftimagect}
                rightImage={rightimagect}
                fsbutton={fsbuttonct}
                bgbutton={colorbuttonct}
                type='submit'
                brbutton={brbuttonct}
                txtbutton={txtbuttonct}
                colorbutton={colortxtbuttonct}
              />
            )
          )}
        </form>
      </DivForm>
    </div>
  );
};

Certificate.defaultProps = {
  headercertificate: [
    {
      smalltextct: "Forms",
      bigtextct: "Third Tab",
      colorbigtextct: "#074EE8",
      colorsmalltextct: "#111111",
    },
  ],
  buttoncertificate: [
    {
      txtbuttonct: "Insert Text",
      colorbuttonct: "#074EE8",
      colortxtbuttonct: "#FFFFFF",
      fsbuttonct: 16,
      brbuttonct: 4,
      leftimagect: {
        src: "",
      },
      rightimagect: {
        src: "",
      },
    },
  ],
  checkcertificate: [
    {
      textcheckct: "I accept the terms and privacy",
      errorcheckct: "Please confirm the terms",
      colorcheckct: "#074EE8",
      colortextcheckct: "#111111",
      colorerrorcheckct: "#FF0000",
      fscheckct: "16px",
      checkct: true,
      roundct: false,
      requiredcheckct: true,
    },
  ],
  birthcertificate: [
    {
      labelbirthct: "Birthday *",
      colorbirthct: "#767676",
      startbirthct: 1900,
      endbirthct: 2022,
    },
  ],
  inputcertificate: [
    {
      textonect: "Insert Label",
      texttwoct: "Insert Placeholder.",
      textthreect: "Error Message",
      colortextnavct: "#767676",
      colorselectedct: "#FF0000",
      colorcompct: "16px",
      typeinputct: "text",
      requiredinputct: true,
    },
  ],
  navcertificate: [
    {
      textonect: "Basic",
      texttwoct: "Social",
      textthreect: "Certificates",
      colortextnavct: "#111111",
      colorselectedct: "#074EE8",
      fsnavct: "16px",
    },
  ],
  certcertificate: [
    {
      colorbtct: "#074EE8",
      leftimagecertct: {
        src: "",
      },
      rightimagecertct: {
        src: "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-Down-arrows-tanah-basah-glyph-tanah-basah-5.png",
      },
      txtcertct: "Certificates",
      colortxtcertct: "#FFFFFF",
      fstxtcertct: 16,
      brbtcertct: 4,
      bgopcertct: "#074EE8",
      colorbtmorect: "#074EE8",
      leftimagemorect: {
        src: "https://img.icons8.com/ios-glyphs/30/FFFFFF/plus-math.png",
      },
      rightimagemorect: {
        src: "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-Right-arrows-tanah-basah-glyph-tanah-basah-3.png",
      },
      txtmorect: "More",
      colortxtmorect: "#FFFFFF",
      fstxtmorect: 16,
      brbtmorect: 4,
      colorerrorcertct: "#FF0000",
      phcertct: "https://www.linkedin.com/in/foo-bar-3a0560104/",
      errortextct: "Empty certificate is not allowed.",
    },
  ],
};

export default Certificate;
