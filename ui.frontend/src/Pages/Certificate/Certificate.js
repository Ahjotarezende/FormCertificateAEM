import React from 'react'
import Header from '../../components/Micros/Header/Header'

const Certificate = ({headercertificate}) => {
  return (
    <div>
      {headercertificate.map(({smalltextct, bigtextct, colorbigtextct, colorsmalltextct = {}}, index) => (
        <Header key={index} smalltext={smalltextct} bigtext={bigtextct} colorbigtext={colorbigtextct} colorsmalltext={colorsmalltextct}/>
      ))}
    </div>
  )
}

export default Certificate