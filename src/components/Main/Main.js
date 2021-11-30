import React from 'react'
import './Main.css'
import { zodiac } from '../../data'
import Zodiac from '../Zodiac/Zodiac'
import background from '../../background.png'

export default function Main() {
  return (
    <main className="background" style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((zodi) => (
        <Zodiac key={zodi.name} {...zodi} />
      ))}
    </main>
  )
}
