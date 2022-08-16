import React from 'react'
import Header from '../../components/Micros/Header/Header'
import Checkbox from '../../components/Checkbox/Checkbox'

const Social = ({headersocial, checksocial}) => {
  return (
    <div>
      {headersocial.map(({smalltextsc, bigtextsc, colorbigtextsc, colorsmalltextsc = {}}, index) => (
        <Header key={index} smalltext={smalltextsc} bigtext={bigtextsc} colorbigtext={colorbigtextsc} colorsmalltext={colorsmalltextsc}/>
      ))}

      {checksocial.map(({textchecksc, errorchecksc, colorchecksc, colortextchecksc, fschecksc ,checksc, roundsc, 
        requiredcheckbs = {}}, index) => (
       <Checkbox  key={index} type={checksc} round={roundsc} txtColor={colortextchecksc} inputColor={colorchecksc}  text={textchecksc} number={fschecksc} required={requiredcheckbs} />
      ))}
    </div>
  )
}

export default Social