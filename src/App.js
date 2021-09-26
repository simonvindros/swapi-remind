import React, { useState, useEffect, useRef, useCallback } from 'react'
import Characters from './components/Characters.js'

import getCharacters from './components/getCharacters'

import { CharacterContainer } from './components/CharacterContainer.style.js'
import { AppContainer } from './components/AppContainer.style'
import { LoadingIndicator } from './components/LoadingIndicator.style'

import SearchBar from './components/SearchBar'

function App() {
  const [pageNumber, setPageNumber] = useState(1)

  const observer = useRef()

  const {
    characters,
    hasNextPage,
    loading
  } = getCharacters(pageNumber)

  //https://www.youtube.com/watch?v=NZKUirTtxcg
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
    <AppContainer>

      {!loading && <SearchBar />}

      <CharacterContainer>
        <Characters characters={characters} lastCharacterRef={lastCharacterRef} />
      </CharacterContainer>

      {loading && <LoadingIndicator>LOADING...</LoadingIndicator>}

    </AppContainer>
  );
}

export default App;
