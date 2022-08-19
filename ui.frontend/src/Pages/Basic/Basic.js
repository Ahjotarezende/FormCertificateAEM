import React from "react";
import InputLabel from "../../components/Input+Label/InputLabel";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import Birthday from "../../components/Birthday/Birthday";
import Certificates from "../../components/Certificates/Certificates";
import Header from "../../components/Micros/Header/Header";
import Navbar from "../../components/Micros/Navbar/Navbar";
import {
  Container,
  Content,
  ContainerP,
  Align,
  AlignButton,
  InputEmailPhone,
} from "./Basic.styled";
import { useForm } from "react-hook-form";
const Basic = (props) => {
  const saveLocalStorage = (label, localStorageData) => {
    localStorageData.push(label);
  };
  const {
    headerbasic,
    navbasic,
    inputbasic,
    birthbasic,
    checkbasic,
    buttonbasic,
    certbasic,
    fonts,
    title,
    titlecolor,
    fonte,
    bgform,
    colorcomp,
    localStorageData,
  } = props;

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
    if (i === "") return "none";
  };

  return (
    <>
      {headerbasic.map(
        (
          { smalltextbs, bigtextbs, colorbigtextbs, colorsmalltextbs = {} },
          index
        ) => (
          <div key={index}>
            <Header
              smalltext={smalltextbs}
              bigtext={bigtextbs}
              colorbigtext={colorbigtextbs}
              colorsmalltext={colorsmalltextbs}
            />
          </div>
        )
      )}
      <Content>
        <Container bgform={bgform}>
          <ContainerP
            titlecolor={titlecolor}
            fonts={fonts}
            fonte={`${fonte}px`}
          >
            {title}
          </ContainerP>
          {navbasic.map(
            (
              {
                textonebs,
                texttwobs,
                textthreebs,
                colortextnavbs,
                colorselectedbs,
                fsnavbs = {},
              },
              index
            ) => (
              <div key={index}>
                <Navbar
                  colorcomp={colorcomp}
                  firstText={textonebs}
                  secondText={texttwobs}
                  thirdText={textthreebs}
                  textColor={colortextnavbs}
                  color={colorselectedbs}
                />
              </div>
            )
          )}
          <InputEmailPhone>
            {inputbasic.map(
              (
                {
                  textonebs,
                  texttwobs,
                  typeinputbs,
                  textthreebs,
                  colortextnavbs,
                  colorselectedbs,
                  colorcompbs,
                  requiredinputbs = {},
                },
                index
              ) => (
                <div key={index}>
                  {saveLocalStorage(textonebs, localStorageData)}
                  <InputLabel
                    colorcomp={colorcomp}
                    textLabel={textonebs}
                    placeholder={texttwobs}
                    txtmessage={textthreebs}
                    colorLabel={colortextnavbs}
                    colormessage={colorselectedbs}
                    fontSizeLabel={colorcompbs}
                    inputName={texttwobs}
                    type={typeinputbs}
                    register={register}
                    errors={errors}
                    required={requiredinputbs}
                  />
                </div>
              )
            )}
          </InputEmailPhone>
          {birthbasic.map(
            (
              { labelbirthbs, colorbirthbs, startbirthbs, endbirthbs = {} },
              index
            ) => (
              <div key={index}>
                <Birthday
                  yearBegin={startbirthbs}
                  yearEnd={endbirthbs}
                  color={colorbirthbs}
                  labelBirth={labelbirthbs}
                  colorcomp={colorcomp}
                  className='birthday'
                />
              </div>
            )
          )}

          {checkbasic.map(
            (
              {
                textcheckbs,
                errorcheckbs,
                colorcheckbs,
                colortextcheckbs,
                colorerrorcheckbs,
                fscheckbs,
                checkbs,
                roundbs,
                requiredcheckbs = {},
              },
              index
            ) => (
              <Align key={index}>
                <Checkbox
                  round={roundbs}
                  txtColor={colortextcheckbs}
                  inputColor={colorcheckbs}
                  text={textcheckbs}
                  number={fscheckbs}
                  required={requiredcheckbs}
                />
              </Align>
            )
          )}
          {certbasic.map(
            (
              {
                labelcertbs,
                colorlabelcertbs,
                colorbtbs,
                leftimagecertbs,
                rightimagecertbs,
                txtcertbs,
                colortxtcertbs,
                fstxtcertbs,
                brbtcertbs,
                bgopcertbs,
                colorbtmorebs,
                leftimagemorebs,
                rightimagemorebs,
                txtmorebs,
                colortxtmorebs,
                fstxtmorebs,
                brbtmorebs,
                colorerrorcertbs,
                phcertbs,
                errortextbs = {},
              },
              index
            ) => (
              <div key={index}>
                {/* <Certificates
                  labelcert={setDisplay(labelcertbs)}
                  colorlabelcert={colorlabelcertbs}
                  colorbt={colorbtbs}
                  leftimagecert={leftimagecertbs}
                  rightimagecert={rightimagecertbs}
                  txtcert={txtcertbs}
                  colortxtcert={colortxtcertbs}
                  fstxtcert={fstxtcertbs}
                  brbtcert={brbtcertbs}
                  bgopcert={bgopcertbs}
                  colorbtmore={colorbtmorebs}
                  leftimagemore={leftimagemorebs}
                  rightimagemore={rightimagemorebs}
                  txtmore={txtmorebs}
                  colortxtmore={colortxtmorebs}
                  fstxtmore={fstxtmorebs}
                  brbtmore={brbtmorebs}
                  colorerrorcert={colorerrorcertbs}
                  phcert={phcertbs}
                  errortext={errortextbs}
                /> */}
              </div>
            )
          )}
          {buttonbasic.map(
            (
              {
                txtbuttonbs,
                colorbuttonbs,
                colortxtbuttonbs,
                fsbuttonbs,
                brbuttonbs,
                leftimagebs,
                rightimagebs = {},
              },
              index
            ) => (
              <AlignButton key={index}>
                <Button
                  leftImage={leftimagebs}
                  rightImage={rightimagebs}
                  fsbutton={fsbuttonbs}
                  brbutton={brbuttonbs}
                  txtbutton={txtbuttonbs}
                  colorbutton={colortxtbuttonbs}
                  bgbutton={colorbuttonbs}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("click");
                  }}
                  type='submit'
                />
              </AlignButton>
            )
          )}
        </Container>
      </Content>
    </>
  );
};

Basic.defaultProps = {
  bgform: "white",
};

export default Basic;
