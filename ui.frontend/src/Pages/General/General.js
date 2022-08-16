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

      <Social />
      <Certificate />
      <Success />
    </FullPage>
  );
};

General.defaultProps = {
  headerbasic: [{}],
  navbasic: [{}],
  inputbasic: [
    {
      textonebs: "",
      texttwobs: "",
      typeinputbs: "",
      textthreebs: "",
      colortextnavbs: "",
      colorselectedbs: "",
      colorcompbs: "",
      requiredinputbs: {},
    },
  ],
  birthbasic: [
    {
      startbirthbs: "",
      endbirthbs: "",
      colorbirthbs: "#aaaaaa",
      labelbirthbs: "Set Birthday",
    },
  ],
  checkbasic: [
    {
      textcheckbs: "set checkbox",
      errorcheckbs: "",
      colorcheckbs: "",
      colortextcheckbs: "",
      colorerrorcheckbs: "",
      fscheckbs: "",
      checkbs: "",
      roundbs: "",
      requiredcheckbs: "",
    },
  ],
  buttonbasic: [
    {
      leftimagebs: "https://via.placeholder.com/150",
      rightimagebs: "https://via.placeholder.com/150",
      fsbuttonbs: "16",
      brbuttonbs: "2",
      txtbuttonbs: "Button",
      colortxtbuttonbs: "#000000",
      colorbuttonbs: "#ffffff",
      onClick: () => {},
      form: "",
      type: "submit",
    },
  ],
  certbasic: [{}],
};

export default MapTo("reactapp/components/geralpage")(General);
