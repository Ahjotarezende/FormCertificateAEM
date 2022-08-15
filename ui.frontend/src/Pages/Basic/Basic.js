import React from 'react'
import Header from '../../components/Header/Header'

const Basic = ({headerbasic}) => {
  return (
    <div>
      {headerbasic.map(({smalltextbs, bigtextbs, colorbigtextbs, colorsmalltextbs = {}}, index) => (
        <Header key={index} smalltextbs={smalltextbs} bigtextbs={bigtextbs} colorbigtextbs={colorbigtextbs} colorsmalltextbs={colorsmalltextbs}/>
      ))}
    </div>
  )
}

export default Basic