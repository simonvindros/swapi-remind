import React from 'react'

import { StyledSearch } from './SearchBar.style'

export default function SearchBar({ setSearchInput, searchInput, setPageNumber, setCharacters }) {

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        setPageNumber(1)
        setCharacters([])
    }

    return (
        < StyledSearch id="searchBar"
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => {
                searchItems(e.target.value)
            }
            }
        />
    )
}
