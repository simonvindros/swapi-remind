import React, { useState, useEffect } from 'react'
import Characters from './components/Characters.js'
import { AppContainer } from './components/AppContainer.style.js'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])
  const [characterImage, setCharacterImage] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCharacters() {
      let res = await fetch('https://swapi.dev/api/people/?format=json')
      let data = await res.json()
      setCharacters(data.results)
    }

    async function fetchCharacterImages() {
      let res = await fetch('https://akabab.github.io/starwars-api/api/all.json')
      let data = await res.json()
      setCharacterImage(data)
    }

    fetchCharacters()
    fetchCharacterImages()
    setLoading(false)
  }, [])

  console.log('characters', characters)
  console.log('characterimage', characterImage)

  return (
    <AppContainer>
      <Characters data={characters} image={characterImage} />
    </AppContainer>
  );
}

export default App;
