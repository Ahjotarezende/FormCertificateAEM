import React from 'react'
import Header from '../../components/Header/Header'

const Basic = ({headerbasic}) => {
  return (
    <div>
      {headerbasic.map(({smalltextbs, bigtextbs, colorbigtextbs, colorsmalltextbs = {}}, index) => (
        <Header key={index} smalltext={smalltextbs} bigtext={bigtextbs} colorbigtext={colorbigtextbs} colorsmalltext={colorsmalltextbs}/>
      ))}
    </div>
  )
}

export default Basic