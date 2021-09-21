import React from 'react'

export default function Characters({ data }) {
    return (
        <>
            {data.map((characters, i) => {
                return (
                    <div key={i}>
                        <strong>{characters.name}</strong>
                    </div>
                )
            })}
        </>
    )
}