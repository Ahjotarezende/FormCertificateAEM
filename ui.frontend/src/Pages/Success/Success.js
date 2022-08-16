import React from 'react'
import Header from '../../components/Header/Header'

const Sucess = ({headerresult}) => {
  return (
    <div>
      {headerresult.map(({smalltextsc, bigtextsc, colorbigtextsc, colorsmalltextsc = {}}, index) => (
        <Header key={index} smalltext={smalltextsc} bigtext={bigtextsc} colorbigtext={colorbigtextsc} colorsmalltext={colorsmalltextsc}/>
      ))}
    </div>
  )
}

export default Sucess