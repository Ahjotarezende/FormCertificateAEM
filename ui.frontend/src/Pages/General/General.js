import React from 'react'
import { MapTo } from "@adobe/aem-react-editable-components"
import { FullPage } from './General.styled'
import Basic from '../Basic/Basic'
import Social from '../Social/Social'
import Certificate from '../Certificate/Certificate'
import Success from '../Success/Success'

const General = ({
    fonts, title, titlecolor, fstitle, bgpage, 
    bgform, colorcomp, headerbasic, navbasic, 
    inputbasic, birthbasic, checkbasic, buttonbasic, 
    certbasic, headersocial, navsocial, inputsocial, birthsocial,
    checksocial, buttonsocial, certsocial, headercertificate,
    navcertificate, inputcertificate, birthcertificate,
    checkcertificate, buttoncertificate, certcertificate,
    headerresult, colorresult, buttonresult
}) => {

  return (
    <FullPage
        fontFamily={fonts}
        backGround={bgpage}
        id="FullPage"
    >
        <Basic headerbasic={headerbasic}/>
        <Social headersocial={headersocial}/>
        <Certificate headercertificate={headercertificate}/>
        <Success headerresult={headerresult}
        />
    </FullPage>
  )
}


General.defaultProps = {
  headerbasic: [
    {
      smalltextbs: "Forms",
      bigtextbs: "First Tab",
      colorsmalltextbs: "#111111",
      colorbigtextbs: "#074ee8"
    }
  ]  ,
  headersocial: [
    {
      smalltextsc: "Forms",
      bigtextsc: "Second Tab",
      colorsmalltextsc: "#111111",
      colorbigtextsc: "#074ee8"
    }
  ] ,
  headercertificate: [
    {
      smalltextct: "Forms",
      bigtextct: "Third Tab",
      colorsmalltextct: "#111111",
      colorbigtextct: "#074ee8"
    }
  ]  ,
  headerresult: [
    {
      smalltextsc: "Forms",
      bigtextsc: "Success",
      colorsmalltextsc: "#111111",
      colorbigtextsc: "#074ee8"
    }
  ]  
  
}



export default MapTo("reactapp/components/geralpage")(General)