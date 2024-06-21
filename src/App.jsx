import { useState } from 'react'
import { Header } from './components/header'
import './App.css'
import { PokemonCards } from './components/pokemon/pokemon-cards'

function App() {
 
  return (
    <div id='app'>
      <Header title={"POKEMON KINGDOM"}/>
      <PokemonCards/>
    </div>
  )
}

export default App
