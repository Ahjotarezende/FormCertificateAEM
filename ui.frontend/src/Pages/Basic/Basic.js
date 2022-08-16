import React from 'react'
import Header from '../../components/Micros/Header/Header'
import Checkbox from '../../components/Checkbox/Checkbox'

const Basic = ({headerbasic, checkbasic}) => {
  return (
    <div>
    {headerbasic.map(({smalltextbs, bigtextbs, colorbigtextbs, colorsmalltextbs = {}}, index) => (
        <Header key={index} smalltext={smalltextbs} bigtext={bigtextbs} colorbigtext={colorbigtextbs} colorsmalltext={colorsmalltextbs}/>
    ))}

      {checkbasic.map(({textcheckbs, errorcheckbs, colorcheckbs, colortextcheckbs , fscheckbs ,checkbs, roundbs, 
        requiredcheckbs = {}}, index) => (
       <Checkbox  key={index} type={checkbs} round={roundbs} txtColor={colortextcheckbs} inputColor={colorcheckbs}  text={textcheckbs} number={fscheckbs} required={requiredcheckbs} />
      ))}


    </div>
  )
}

export default Basic