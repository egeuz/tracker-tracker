import React from 'react'
import Search from './Search'
import moleMine from '../assets/mole-mine.gif'

function MainInterface() {
  return (
    <div id="main-interface">
      <img src={moleMine} alt="placeholder" />
      <p>Reveal all the ways platforms and third party entities track you online. Find out what they know about you, and what you can do about it.</p>
      <Search />
    </div>
  )
}

export default MainInterface
