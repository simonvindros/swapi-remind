import React from 'react'

import { CharacterCard, CharacterImage } from './Characters.style'

export default function Characters({ data, image }) {
    return (
        <>
            {data.map((characters, i) => {
                return (
                    <CharacterCard key={i}>
                        <CharacterImage src={image[i].image} />
                        {/* <strong>{characters.name}</strong> */}
                    </CharacterCard>
                )
            })}
        </>
    )
}