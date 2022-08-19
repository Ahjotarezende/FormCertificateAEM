import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Micros/Header/Header";
import { Content, Container, ButtonStyle, ContainerP } from "./Success.styled";
const Success = ({
  headerresult,
  coloresult,
  buttonresult,
  localStorageData,
  bgform,
}) => {
  return (
    <>
      {headerresult.map(
        (
          { smalltextrs, bigtextrs, colorbigtextrs, colorsmalltextrs = {} },
          index
        ) => (
          <div key={index}>
            <Header
              smalltext={smalltextrs}
              bigtext={bigtextrs}
              colorbigtext={colorbigtextrs}
              colorsmalltext={colorsmalltextrs}
            />
          </div>
        )
      )}
      <Content bgform={bgform}>
        <Container bgform={bgform}>
          <>
            {/* {localStorageData.map((item) => {
              if (localStorage.getItem(item) !== "" && item !== undefined) {
                if (localStorage.getItem(item) !== null) {
                  return (
                    <ContainerP>
                      {`${item}: ` + localStorage.getItem(item)}
                    </ContainerP>
                  );
                }
              }
            })} */}

            {localStorage.getItem("Full Name") ? (
              <ContainerP>
                {"Full name: " + localStorage.getItem("Full Name")}{" "}
              </ContainerP>
            ) : (
              <></>
            )}
            {localStorage.getItem("Nick Name") ? (
              <ContainerP>
                {"Nick Name: " + localStorage.getItem("Nick Name")}{" "}
              </ContainerP>
            ) : (
              <></>
            )}
            {localStorage.getItem("Email") ? (
              <ContainerP>
                {"Email: " + localStorage.getItem("Email")}{" "}
              </ContainerP>
            ) : (
              <></>
            )}
            {localStorage.getItem("Birthday") ? (
              <ContainerP>
                {"Birthday: " + localStorage.getItem("Birthday")}{" "}
              </ContainerP>
            ) : (
              <></>
            )}

            {localStorage.getItem("Age") ? (
              <ContainerP>{"Age: " + localStorage.getItem("Age")} </ContainerP>
            ) : (
              <></>
            )}

            {localStorage.getItem("Github") ? (
              <ContainerP>
                {"Github: " + localStorage.getItem("Github")}{" "}
              </ContainerP>
            ) : (
              <></>
            )}
            {localStorage.getItem("Certificates") ? (
              <ContainerP>
                {"Certificates: " + localStorage.getItem("Certificates")}{" "}
              </ContainerP>
            ) : (
              <></>
            )}

            {localStorage.getItem("Team Name") ? (
              <ContainerP>
                {"Team Name: " + localStorage.getItem("Team Name")}{" "}
              </ContainerP>
            ) : (
              <></>
            )}

            {localStorage.getItem("Institution") ? (
              <ContainerP>
                {"Institution: " + localStorage.getItem("Institution")}{" "}
              </ContainerP>
            ) : (
              <></>
            )}

            {localStorage.getItem("Graduation") ? (
              <ContainerP>
                {"Graduation: " + localStorage.getItem("Graduation")}{" "}
              </ContainerP>
            ) : (
              <></>
            )}
          </>
          <ButtonStyle>
            {buttonresult.map(
              (
                {
                  txtbuttonrs,
                  colorbuttonrs,
                  colortxtbuttonrs,
                  fsbuttonrs,
                  brbuttonrs,
                  leftimagers,
                  rightimagers,
                },
                index
              ) => (
                <div key={index}>
                  <Button
                    leftImage={leftimagers}
                    rightImage={rightimagers}
                    fsbutton={fsbuttonrs}
                    brbutton={brbuttonrs}
                    txtbutton={txtbuttonrs}
                    colorbutton={colortxtbuttonrs}
                    bgbutton={colorbuttonrs}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("click");
                    }}
                    type='submit'
                  />
                </div>
              )
            )}
          </ButtonStyle>
        </Container>
      </Content>
    </>
  );
};

Success.defaultProps = {
  headerresult: [
    {
      smalltextrs: "Forms",
      bigtextrs: "Sucess",
      colorbigtextrs: "#074EE8",
      colorsmalltextrs: "#111111",
    },
  ],
  buttonresult: [
    {
      txtbuttonrs: "Insert Text",
      colorbuttonrs: "#074EE8",
      colortxtbuttonrs: "#FFFFFF",
      fsbuttonrs: 16,
      brbuttonrs: 4,
      leftimagers: {
        src: "",
      },
      rightimagers: {
        src: "",
      },
    },
  ],
};
export default Success;
