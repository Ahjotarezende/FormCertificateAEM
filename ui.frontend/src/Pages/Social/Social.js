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
         
       
    </>
  );
};

export default Social;
