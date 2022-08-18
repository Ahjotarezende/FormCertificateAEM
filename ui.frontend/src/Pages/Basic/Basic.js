import React from "react";
import InputLabel from "../../components/Input+Label/InputLabel";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import Birthday from "../../components/Birthday/Birthday";
import Certificates from "../../components/Certificates/Certificates";
import Header from "../../components/Micros/Header/Header";
import Navbar from "../../components/Micros/Navbar/Navbar";
import { Container, Content, ContainerP, FontFamily } from "./Basic.styled";
import { useForm } from "react-hook-form";
const Basic = (props) => {
  const {
    fonts,
    title,
    titlecolor,
    fonte,
    bgform,
    colorcomp,
    headerbasic,
    navbasic,
    inputbasic,
    birthbasic,
    checkbasic,
    buttonbasic,
    certbasic,
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

  return (
    <FontFamily fonts={fonts}>
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
        <Container>
          <ContainerP>Team Sign up</ContainerP>
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
                  firstText={textonebs}
                  secondText={texttwobs}
                  thirdText={textthreebs}
                  textColor={colortextnavbs}
                  color={colorselectedbs}
                />
              </div>
            )
          )}
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
                <InputLabel
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
                  borderRadius='2px'
                  required={requiredinputbs}
                />
              </div>
            )
          )}
          {birthbasic.map(
            (
              { labelbirthbs, colorbirthbs, startbirthbs, endbirthbs = {} },
              index
            ) => (
              <div key={index}>
                {console.log(
                  labelbirthbs,
                  colorbirthbs,
                  startbirthbs,
                  endbirthbs
                )}
                <Birthday
                  yearBegin={startbirthbs}
                  yearEnd={endbirthbs}
                  color={colorbirthbs}
                  labelBirth={labelbirthbs}
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
              <div key={index}>
                <Checkbox
                  round={roundbs}
                  txtColor={colortextcheckbs}
                  inputColor={colorcheckbs}
                  text={textcheckbs}
                  number={fscheckbs}
                  required={requiredcheckbs}
                />
              </div>
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
                <Certificates
                  labelcert={labelcertbs}
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
                />
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
              <div key={index}>
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
              </div>
            )
          )}
        </Container>
      </Content>
    </FontFamily>
  );
};

export default Basic;
