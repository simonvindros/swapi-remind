import React from 'react'

import { CharacterCard, CharacterImage } from './Characters.style'

export default function Characters({ characters, lastCharacterRef }) {
    return (
        <>
            {characters.map((character, i) => {
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
            })}
        </>
    )
}