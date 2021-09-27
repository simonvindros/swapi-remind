import React, { useState, useRef, useCallback } from 'react'
import Characters from './components/Characters.js'

import getCharacters from './components/getCharacters'

import { CharacterContainer } from './components/CharacterContainer.style.js'
import { AppContainer } from './components/AppContainer.style'
import { LoadingIndicator } from './components/LoadingIndicator.style'

import SearchBar from './components/SearchBar'

function App() {
  const [pageNumber, setPageNumber] = useState(1)
  const [searchInput, setSearchInput] = useState('')

  const observer = useRef()

  const {
    characters,
    setCharacters,
    hasNextPage,
    loading
  } = getCharacters(pageNumber, searchInput)

  const lastCharacterRef = useCallback(node => {
    if (loading) return
    if (observer.current) {
      observer.current.disconnect()
    }
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNextPage) {
        setPageNumber(pageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasNextPage, pageNumber, searchInput])

  return (
    <AppContainer>

      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} setPageNumber={setPageNumber} setCharacters={setCharacters} />

      <CharacterContainer>
        <Characters characters={characters} lastCharacterRef={lastCharacterRef} searchInput={searchInput} />
      </CharacterContainer>

      {loading && <LoadingIndicator>LOADING...</LoadingIndicator>}

    </AppContainer>
  );
}

export default App;
