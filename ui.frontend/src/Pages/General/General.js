import React from "react";
import { useState } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { FullPage } from "./General.styled";
import Basic from "../Basic/Basic";
import Social from "../Social/Social";
import Certificate from "../Certificate/Certificate";
import Success from "../Success/Success";
import { set } from "react-hook-form";


export const AuthContext = React.createContext();
//state that sets witch page we are

const General = (props) => {
  let [page, setPage] = useState(0); 
  let userAgent = document.body.scrollHeight;

 

  
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
    <AuthContext.Provider value={{ name: [page, setPage] }}>
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

      <Social
        fonts={fonts}
        title={title}
        titlecolor={titlecolor}
        fonte={fstitle}
        bgform={bgform}
        colorcomp={colorcomp}
        headersocial={headersocial}
        navsocial={navsocial}
        inputsocial={inputsocial}
        birthsocial={birthsocial}
        checksocial={checksocial}
        buttonsocial={buttonsocial}
        certsocial={certsocial}
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
    </AuthContext.Provider>
  );
};

General.defaultProps = {
  fonts: "Nunito",
  title: "Team Sign Up",
  titlecolor: "#111111",
  fstitle: 18,
  bgform: "white",
  bgpage: "#E5E5E5",
  colorcomp: "#AAAAAA",

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
      textonebs: "Basic",
      texttwobs: "Social",
      textthreebs: "Certificates",
      colortextnavbs: "#111111",
      colorselectedbs: "#074EE8",
    },
  ],
  inputbasic: [
    {
      textonebs: "Label",
      texttwobs: "Placeholder",
      typeinputbs: "text",
      textthreebs: "Error Message",
      colortextnavbs: "#767676",
      colorselectedbs: "#FF0000",
      colorcompbs: 16,
      requiredinputbs: true,
    },
  ],
  birthbasic: [
    {
      startbirthbs: 1902,
      endbirthbs: 2022,
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
      fscheckbs: 16,
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
    },
  ],
  certbasic: [
    {
      labelcertbs: "",
      colorlabelcertbs: "#767676",
      colorbtbs: "#074EE8",
      leftimagecertbs: {
        src: "",
      },
      rightimagecertbs: {
        src: "",
      },
      txtcertbs: "Certificates",
      colortxtcertbs: "#FFFFFF",
      fstxtcertbs: 16,
      brbtcertbs: 4,
      bgopcertbs: "#074EE8",
      colorbtmorebs: "#074EE8",
      leftimagemorebs: {
        src: "",
      },
      rightimagemorebs: {
        src: "",
      },
      txtmorebs: "More",
      colortxtmorebs: "#FFFFFF",
      fstxtmorebs: 16,
      brbtmorebs: 4,
      colorerrorcertbs: "#FF0000",
      phcertbs: "https://www.linkedin.com/in/foo-bar-3a0560104/",
      errortextbs: "Empty certificate is not allowed.",
    },
  ],
};

export default MapTo("reactapp/components/geralpage")(General);
