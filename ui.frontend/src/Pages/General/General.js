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
      textchecksc: "Insert checkbox label",
      errorchecksc: "",
      colorchecksc: "",
      colortextchecksc: "",
      colorerrorchecksc: "",
      requiredchecksc: "",
    },
  ],
  buttonsocial: [
    {
      txtbuttonsc: "Insert Text",
      colorbuttonsc: "#074EE8",
      colortxtbuttonsc: "#FFFFFF",
      fsbuttonsc: 16,
      brbuttonsc: 4,
      leftimagesc: {
        src: ""
      },
      rightimagesc: {
        src: ""
      }
    }
   ],

   inputsocial: [
    {
      
    },
  ],


  certsocial: [
      {
          colorbtsc: "#074EE8",
          leftimagecertsc: {
              src: ""
          },
          rightimagecertsc: {
              src: "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-Down-arrows-tanah-basah-glyph-tanah-basah-5.png"
          },
          txtcertsc: "Certificates",
          colortxtcertsc: "#FFFFFF",
          fstxtcertsc: 16,
          brbtcertsc: 4,
          bgopcertsc: "#074EE8",
          colorbtmoresc: "#074EE8",
          leftimagemoresc: {
              src: "https://img.icons8.com/ios-glyphs/30/FFFFFF/plus-math.png"
          },
          rightimagemoresc: {
              src: "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-Right-arrows-tanah-basah-glyph-tanah-basah-3.png"
          },
          txtmoresc: "More",
          colortxtmoresc: "#FFFFFF",
          fstxtmoresc: 16,
          brbtmoresc: 4,
          colorerrorcertsc: "#FF0000",
          phcertsc: "https://www.linkedin.com/in/foo-bar-3a0560104/",
          errortextsc: "Empty certificate is not allowed."
      }
  ]
};

export default MapTo("reactapp/components/geralpage")(General);