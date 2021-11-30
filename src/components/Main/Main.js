import React from 'react'
import './Main.css'
import { zodiac } from '../../data'
import Zodiac from '../Zodiac/Zodiac'

export default function Main() {
  return (
    <main>
      {zodiac.map((zodi) => (
        <Zodiac key={zodi.name} {...zodi} />
      ))}
    </main>
  )
}
