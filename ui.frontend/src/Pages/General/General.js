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
    <FullPage
        fontFamily={fonts}
        backGround={bgpage}
        id="FullPage"
    >
        

        <Social
          headersocial={headersocial}
          navsocial={navsocial}
          inputsocial={inputsocial}
          birthsocial={birthsocial}
          checksocial={checksocial}
          buttonsocial={buttonsocial}
          certsocial={certsocial}
        />

        {/*<Basic
          headerbasic={headerbasic}
          navbasic={navbasic}
          inputbasic={inputbasic}
          birthbasic={birthbasic}
          checkbasic={checkbasic}
          buttonbasic={buttonbasic}
          certbasic={certbasic}
        />
        <Certificate fonts={fonts} title={title} titlecolor={titlecolor} fonte={fstitle} bgform={bgform}
          colorcomp={colorcomp} headercertificate={headercertificate} navcertificate={navcertificate} inputcertificate={inputcertificate}
          birthcertificate={birthcertificate} checkcertificate={checkcertificate} buttoncertificate={buttoncertificate}
        certcertificate={certcertificate}/> */}
        
    </FullPage>
  );
};

General.defaultProps = {
  headersocial: [
    {
      smalltextsc: "Forms",
      bigtextsc: "Third Tab",
      colorbigtextsc: "#000000",
      colorsmalltextsc: "#000000",
    },
  ],
  navsocial: [
    {
      textonesc: "First Tab",
      texttwosc: "Second Tab",
      textthreesc: "Third Tab",
      colortextnavsc: "#000000",
      colorselectedsc: "#0000FF",
    },
  ],
 
  birthsocial: [
    {
      startbirthsc: "",
      endbirthsc: "",
      colorbirthsc: "#aaaaaa",
      labelbirthsc: "Set Birthday",
    },
  ],
  checksocial: [
    {
      textchecksc: "set checkbox",
      errorchecksc: "",
      colorchecksc: "",
      colortextchecksc: "",
      colorerrorchecksc: "",
      fschecksc: "",
      checksc: "",
      roundsc: "",
      requiredchecksc: "",
    },
  ],
  buttonsocial: [
    {
      leftimagesc: "https://via.placeholder.com/150",
      rightimagesc: "https://via.placeholder.com/150",
      fsbuttonsc: "16",
      brbuttonsc: "2",
      txtbuttonsc: "Button",
      colortxtbuttonsc: "#000000",
      colorbuttonsc: "#ffffff",
      onClick: () => {},
      form: "",
      type: "submit",
    },
  ],
  certsocial: [
    {
      labelcertsc: "sdfsdf",
      colorlabelcertsc: "",
      colorbtsc: "",
      leftimagecertsc: "",
      rightimagecertsc: "",
      txtcertsc: "",
      colortxtcertsc: "",
      fstxtcertsc: "",
      brbtcertsc: "",
      bgopcertsc: "",
      colorbtmoresc: "",
      leftimagemoresc: "",
      rightimagemoresc: "",
      txtmoresc: "",
      colortxtmoresc: "",
      fstxtmoresc: "",
      brbtmoresc: "",
      colorerrorcertsc: "",
      phcertsc: "",
      errortextsc: "",
    },
  ],
};

export default MapTo("reactapp/components/geralpage")(General);