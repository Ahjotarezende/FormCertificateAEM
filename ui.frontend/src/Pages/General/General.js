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
        {/* <Basic/>
        <Social /> */}
        <Certificate fonts={fonts} title={title} titlecolor={titlecolor} fonte={fstitle} bgform={bgform}
          colorcomp={colorcomp} headercertificate={headercertificate} navcertificate={navcertificate} inputcertificate={inputcertificate}
          birthcertificate={birthcertificate} checkcertificate={checkcertificate} buttoncertificate={buttoncertificate}
          certcertificate={certcertificate}/>
       {/* <Success />  */}
        
    </FullPage>
  )
}

{/*}
General.defaultProps = {
  headerbasic: [
    {
      smalltextbs: "Forms",
      bigtextbs: "First Tab",
    }
  ] 
} */}



export default MapTo("reactapp/components/geralpage")(General)