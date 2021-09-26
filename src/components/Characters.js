import React, { useState } from 'react'

import {
    CharacterCard,
    CharacterName,
    CharacterBirth,
    CharacterGender,
    CharacterHeight,
    CharacterWeight
} from './Characters.style'

export default function Characters({ characters, lastCharacterRef }) {

    const [clickedName, setClickedName] = useState('')

    const handleClick = (character) => {
        if (clickedName === '') {
            setClickedName(character.name)
        } else {
            setClickedName('')
        }
    }

    return (
        <>
            {characters.map((character, i) => {
                if (characters.length === i + 1) {
                    return (
                        <CharacterCard ref={lastCharacterRef}
                            key={character.name}
                            id={character.name}
                            onClick={() => handleClick(character)} >
                            <CharacterName>[ {character.name} ]</CharacterName>
                            {clickedName === character.name && <CharacterBirth> Birth year: {character.birth_year}</CharacterBirth>}
                            {clickedName === character.name && <CharacterGender>Gender: {character.gender}</CharacterGender>}
                            {clickedName === character.name && <CharacterHeight>Height (cm): {character.height}</CharacterHeight>}
                            {clickedName === character.name && <CharacterWeight>Weight (kg): {character.mass}</CharacterWeight>}
                        </CharacterCard>
                    )
                }
                return (
                    <CharacterCard key={character.name}
                        id={character.name}
                        onClick={() => handleClick(character)}>
                        <CharacterName>[ {character.name} ]</CharacterName>
                        {clickedName === character.name && <CharacterBirth>Birth year: {character.birth_year}</CharacterBirth>}
                        {clickedName === character.name && <CharacterGender>Gender: {character.gender}</CharacterGender>}
                        {clickedName === character.name && <CharacterHeight>Height (cm): {character.height}</CharacterHeight>}
                        {clickedName === character.name && <CharacterWeight>Weight (kg): {character.mass}</CharacterWeight>}
                    </CharacterCard>
                )
            })}
        </>
    )
}