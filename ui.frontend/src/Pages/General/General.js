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
        fonts={fonts}
        title={title}
        titlecolor={titlecolor}
        fonte={fstitle}
        bgform={bgform}
        colorcomp={colorcomp}
        headerbasic={headerbasic}
        navbasic={navbasic}
        inputbasic={inputbasic}
        birthbasic={birthbasic}
        checkbasic={checkbasic}
        buttonbasic={buttonbasic}
        certbasic={certbasic}
      />
      <Certificate
        fonts={fonts}
        title={title}
        titlecolor={titlecolor}
        fonte={fstitle}
        bgform={bgform}
        colorcomp={colorcomp}
        headercertificate={headercertificate}
        navcertificate={navcertificate}
        inputcertificate={inputcertificate}
        birthcertificate={birthcertificate}
        checkcertificate={checkcertificate}
        buttoncertificate={buttoncertificate}
        certcertificate={certcertificate}
      />
    </FullPage>
  );
};

General.defaultProps = {
  headerbasic: [
    {
      smalltextbs: "Forms",
      bigtextbs: "First Tab",
      colorbigtextbs: "#074EE8",
      colorsmalltextbs: "#111111",
    },
  ],
  navbasic: [
    {
      textonebs: "First Tab",
      texttwobs: "Second Tab",
      textthreebs: "Third Tab",
      colortextnavbs: "#111111",
      colorselectedbs: "#074EE8",
    },
  ],
  inputbasic: [
    {
      textonebs: "Insert Label",
      texttwobs: "Insert Placeholder.",
      typeinputbs: "text",
      textthreebs: "Error Message",
      colortextnavbs: "#767676",
      colorselectedbs: "#FF0000",
      colorcompbs: "16px",
      requiredinputbs: true,
    },
  ],
  birthbasic: [
    {
      startbirthbs: "1900",
      endbirthbs: "2022",
      colorbirthbs: "#767676",
      labelbirthbs: "Birthday *",
    },
  ],
  checkbasic: [
    {
      textcheckbs: "I accept the terms and privacy",
      errorcheckbs: "Please confirm the terms",
      colorcheckbs: "#074EE8",
      colortextcheckbs: "#111111",
      colorerrorcheckbs: "#FF0000",
      fscheckbs: "16px",
      checkbs: true,
      roundbs: false,
      requiredcheckbs: true,
    },
  ],
  buttonbasic: [
    {
      leftimagebs: {
        src: "",
      },
      rightimagebs: {
        src: "",
      },
      fsbuttonbs: 16,
      brbuttonbs: 4,
      txtbuttonbs: "Button",
      colortxtbuttonbs: "#FFFFFF",
      colorbuttonbs: "#074EE8",
      onClick: () => {},
      form: "",
      type: "submit",
    },
  ],
  certbasic: [
    {
      labelcertbs: "sdfsdf",
      colorlabelcertbs: "",
      colorbtbs: "#074EE8",
      leftimagecertbs: "",
      rightimagecertbs: {
        src: "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-Down-arrows-tanah-basah-glyph-tanah-basah-5.png",
      },
      txtcertbs: "Certificates",
      colortxtcertbs: "#FFFFFF",
      fstxtcertbs: 16,
      brbtcertbs: 4,
      bgopcertbs: "#074EE8",
      colorbtmorebs: "#074EE8",
      leftimagemorebs: {
        src: "https://img.icons8.com/ios-glyphs/30/FFFFFF/plus-math.png",
      },
      rightimagemorebs: {
        src: "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-Right-arrows-tanah-basah-glyph-tanah-basah-3.png",
      },
      txtmorebs: "More",
      colortxtmorebs: "#FFFFFF",
      fstxtmorebs: 16,
      brbtmorebs: 4,
      colorerrorcertbs: "",
      phcertbs: "https://www.linkedin.com/in/foo-bar-3a0560104/",
      errortextbs: "Empty certificate is not allowed.",
    },
  ],
};

export default MapTo("reactapp/components/geralpage")(General);
