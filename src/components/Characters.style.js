import styled from 'styled-components'

export const CharacterCard = styled.div`
    margin: 50px 50px 50px 50px;
    border-radius: 2px;
    min-height: 250px;
    width: 180px;
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: space-around;
    box-shadow: 0px 0px 18px 10px #8f8f8f;
    background-image: radial-gradient(circle at center, rgba(143, 143, 143, 0.1), 
                                                        rgba(143, 143, 143, 0.6));
`

export const CharacterName = styled.div`
    font-family: Futura;
    font-feature-settings: "smcp" on;
    color: yellow;
`

export const CharacterBirth = styled.div`
    font-family: Futura;
    font-feature-settings: "smcp" on;
    color: #ffff7a;
`

export const CharacterGender = styled.div`
    font-family: Futura;
    font-feature-settings: "smcp" on;
    color: #ffff7a;
`

export const CharacterHeight = styled.div`
    font-family: Futura;
    font-feature-settings: "smcp" on;
    color: #ffff7a;
`

export const CharacterWeight = styled.div`
    font-family: Futura;
    font-feature-settings: "smcp" on;
    color: #ffff7a;
`