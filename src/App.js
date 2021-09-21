import React, { useState, useEffect } from 'react'
import Characters from './components/Characters.js'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCharacters() {
      let res = await fetch('https://swapi.dev/api/people/?format=json')
      let data = await res.json()
      setCharacters(data.results)
    }

    fetchCharacters()
    setLoading(false)
  }, [])

  console.log('characters', characters)

  return (
    <div className="App">
      <Characters data={characters} />
    </div>
  );
}

export default App;
