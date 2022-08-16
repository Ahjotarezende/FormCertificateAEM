import React from 'react'
import Header from '../../components/Micros/Header/Header'

const Sucess = ({headerresult}) => {
  return (
    <div>
      {headerresult.map(({smalltextrs, bigtextrs, colorbigtextrs, colorsmalltextrs = {}}, index) => (
        <Header key={index} smalltext={smalltextrs} bigtext={bigtextrs} colorbigtext={colorbigtextrs} colorsmalltext={colorsmalltextrs}/>
      ))}
    </div>
  )
}

export default Sucess