import React, { useState } from 'react'

import { StyledSearch } from './SearchBar.style'

export default function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <StyledSearch id="searchBar"
            type="text"
            placeholder="Search..."
            onChange={event => { setSearchTerm(event.target.value) }}
        />
    )
}
