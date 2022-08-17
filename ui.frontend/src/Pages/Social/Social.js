import React from "react";
import InputLabel from "../../components/Input+Label/InputLabel";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import Birthday from "../../components/Birthday/Birthday";
import Certificates from "../../components/Certificates/Certificates";
import Header from "../../components/Micros/Header/Header";
import Navbar from "../../components/Micros/Navbar/Navbar";
import { Container, Content, ContainerP } from "./Social.Styled";
const Social = ({
  headersocial,
  navsocial,
  inputsocial,
  birthsocial,
  checksocial,
  buttonsocial,
  certsocial,
}) => {
  return (
    <>
      {headersocial.map(
        (
          { smalltextsc, bigtextsc, colorbigtextsc, colorsmalltextsc = {} },
          index
        ) => (
          <div key={index}>
            <Header
              smalltext={smalltextsc}
              bigtext={bigtextsc}
              colorbigtext={colorbigtextsc}
              colorsmalltext={colorsmalltextsc}
            />
          </div>
        )
      )}

      {navsocial.map(
        (
          {
            textonesc,
            texttwosc,
            textthreesc,
            colortextnavsc,
            colorselectedsc,
            fsnavsc = {},
          },
          index
        ) => (
          <div key={index}>
            <Navbar
              firstText={textonesc}
              secondText={texttwosc}
              thirdText={textthreesc}
              textColor={colortextnavsc}
              color={colorselectedsc}
            />
          </div>
        )
      )}

      {inputsocial.map(
            (
              {
                textonesc,
                texttwosc,
                typeinputsc,
                textthreesc,
                colortextnavsc,
                colorselectedsc,
                colorcompsc,
                requiredinputsc = {},
              },
              index
            ) => (
              <div key={index}>
                <InputLabel
                  textLabel={textonesc}
                  placeholder={texttwosc}
                  txtmessage={textthreesc}
                  colorLabel={colortextnavsc}
                  colormessage={colorselectedsc}
                  fontSizeLabel={colorcompsc}
                  inputName={texttwosc}
                  type={typeinputsc}
                />
              </div>
            )
          )}

      {birthsocial.map(
        (
          { labelbirthsc, colorbirthsc, startbirthsc, endbirthsc = {} },
          index
        ) => (
          <div key={index}>
            {console.log(labelbirthsc, colorbirthsc, startbirthsc, endbirthsc)}
            <Birthday
              yearBegin={startbirthsc}
              yearEnd={endbirthsc}
              color={colorbirthsc}
              labelBirth={labelbirthsc}
            />
          </div>
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
          <div key={index}>
            <Checkbox
              key={index}
              type={checksc}
              round={roundsc}
              txtColor={colortextchecksc}
              inputColor={colorchecksc}
              text={textchecksc}
              number={fschecksc}
              required={requiredchecksc}
            />
          </div>
        )
      )}

      {/* certificate */}

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
          <div key={index}>
            <Button
              leftImage={leftimagesc}
              rightImage={rightimagesc}
              fsbutton={fsbuttonsc}
              brbutton={brbuttonsc}
              txtbutton={txtbuttonsc}
              colorbutton={colortxtbuttonsc}
              bgbutton={colorbuttonsc}
              onClick={(e) => {
                e.preventDefault();
                console.log("click");
              }}
              type='submit'
            />
          </div>
        )
      )}
    </>
  );
};

export default Social;
