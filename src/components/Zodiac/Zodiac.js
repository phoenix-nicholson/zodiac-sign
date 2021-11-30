import React from 'react'
import './Zodiac.css'

export default function Zodiac({ name, dates }) {
  return (
    <div className="zodiac">
      <img alt={name} src={`${process.env.PUBLIC_URL}/Zodiac/${name}.png`} />
      <span className="name">{name}</span>
      <span>{dates}</span>
    </div>
  )
}
