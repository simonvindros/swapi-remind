import React, { useState, useEffect, useRef, useCallback } from 'react'
import Characters from './components/Characters.js'

import getCharacters from './components/getCharacters'

import { CharacterContainer } from './components/CharacterContainer.style.js'
import './App.css'

function App() {
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

  return (
    <CharacterContainer>
      <Characters characters={characters} lastCharacterRef={lastCharacterRef} />
      {/* <div>{loading && 'Loading...'}</div> */}
    </CharacterContainer>
  );
}

export default App;
