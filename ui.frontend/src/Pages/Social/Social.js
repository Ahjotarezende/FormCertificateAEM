import React from 'react'
import Header from '../../components/Micros/Header/Header'

const Social = ({headersocial}) => {
  return (
    <div>
      {headersocial.map(({smalltextsc, bigtextsc, colorbigtextsc, colorsmalltextsc = {}}, index) => (
        <Header key={index} smalltext={smalltextsc} bigtext={bigtextsc} colorbigtext={colorbigtextsc} colorsmalltext={colorsmalltextsc}/>
      ))}
    </div>
  )
}

export default Social