import React from "react";
import InputLabel from "../../components/Input+Label/InputLabel";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import Birthday from "../../components/Birthday/Birthday";
import Certificate from "../Certificate/Certificate";
const Basic = (props) => {
  const {
    headerbasic,
    navbasic,
    inputbasic,
    birthbasic,
    checkbasic,
    buttonbasic,
    certbasic,
  } = props;

  return (
    <>
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
            {console.log(labelbirthbs, colorbirthbs, startbirthbs, endbirthbs)}
            <Birthday
              yearBegin={startbirthbs}
              yearEnd={endbirthbs}
              color={colorbirthbs}
              labelBirth={labelbirthbs}
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
            <Certificate
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
    </>
  );
};

export default Basic;
