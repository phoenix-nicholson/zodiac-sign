import React from 'react'
import './Zodiac.css'

export default function Zodiac({ name, dates }) {
  return (
    <div className="zodiac-card">
      <img alt={name} src={`${process.env.PUBLIC_URL}/Zodiac/${name}.png`} />
      <div className="name">{name}</div>
      <div>{dates}</div>
    </div>
  )
}
