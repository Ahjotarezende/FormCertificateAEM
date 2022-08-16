import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { FullPage } from "./General.styled";
import Basic from "../Basic/Basic";
import Social from "../Social/Social";
import Certificate from "../Certificate/Certificate";
import Success from "../Success/Success";

const General = (props) => {
  const { fonts, title, titlecolor, fstitle, bgpage, bgform, colorcomp } =
    props;
  const {
    headerbasic,
    navbasic,
    inputbasic,
    birthbasic,
    checkbasic,
    buttonbasic,
    certbasic,
  } = props;

  const {
    headersocial,
    navsocial,
    inputsocial,
    birthsocial,
    checksocial,
    buttonsocial,
    certsocial,
  } = props;

  const {
    headercertificate,
    navcertificate,
    inputcertificate,
    birthcertificate,
    checkcertificate,
    buttoncertificate,
    certcertificate,
  } = props;

  const { headerresult, colorresult, buttonresult } = props;
  return (
    <FullPage fontFamily={fonts} backGround={bgpage} id='FullPage'>
      <Basic
        headerbasic={headerbasic}
        navbasic={navbasic}
        inputbasic={inputbasic}
        birthbasic={birthbasic}
        checkbasic={checkbasic}
        buttonbasic={buttonbasic}
        certbasic={certbasic}
      />
      {/* {buttonbasic.map(
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
            {console.log(
              txtbuttonbs,
              colorbuttonbs,
              colortxtbuttonbs,
              fsbuttonbs,
              brbuttonbs,
              leftimagebs,
              rightimagebs
            )}
          </div>
        )
      )} */}
      <Social />
      <Certificate />
      <Success />
    </FullPage>
  );
};

export default MapTo("reactapp/components/geralpage")(General);
