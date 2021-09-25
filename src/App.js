import React, { useState, useEffect, useRef, useCallback } from 'react'
import Characters from './components/Characters.js'

import getCharacters from './components/getCharacters'

import { AppContainer } from './components/AppContainer.style.js'
import './App.css'

function App() {
  // const [characters, setCharacters] = useState([])
  // const [characterImage, setCharacterImage] = useState([])
  // const [loading, setLoading] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)

  const observer = useRef()

  const {
    characters,
    hasNextPage,
    loading
  } = getCharacters(pageNumber)

  const lastCharacterRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNextPage) {
        setPageNumber(pageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasNextPage])


  // useEffect(() => {
  //   async function fetchCharacters() {
  //     let res = await fetch(`https://swapi.dev/api/people/?page=${pageNumber}&format=json`)
  //     let data = await res.json()
  //     setCharacters(data.results)
  //   }

  //   async function fetchCharacterImages() {
  //     let res = await fetch('https://akabab.github.io/starwars-api/api/all.json')
  //     let data = await res.json()
  //     setCharacterImage(data)
  //   }

  //   fetchCharacters()
  //   fetchCharacterImages()
  //   setLoading(false)
  // }, [pageNumber])

  // console.log('characters', characters)
  // console.log('characterimage', characterImage)

  return (
    <AppContainer>
      <Characters characters={characters} lastCharacterRef={lastCharacterRef} />
      {/* {characters.map((character, i) => {
        if (characters.length === i + 1) {
          return (
            <div ref={lastCharacterRef} key={character.name}>
              <strong>{character.name}</strong>
            </div>
          )
        }
        return (
          <div key={character.name}>
            <strong>{character.name}</strong>
          </div>
        )
      })} */}
      <div>{loading && 'Loading...'}</div>
      <div>Hello</div>
    </AppContainer>
  );
}

export default App;
