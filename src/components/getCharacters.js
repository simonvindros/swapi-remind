import { useEffect, useState } from 'react'
import axios from 'axios'

//needs capital G?
export default function GetCharacters(pageNumber) {
    const [loading, setLoading] = useState(true)
    const [characters, setCharacters] = useState([])
    const [hasNextPage, setHasNextPage] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios({
            method: 'GET',
            url: `https://swapi.dev/api/people/?page=${pageNumber}&format=json`,
        }).then(res => {
            setCharacters(prev => { return [...prev, ...res.data.results] })
            if (res.data.next === null) {
                setHasNextPage(false)
            }
            setLoading(false)
        })
    }, [pageNumber])
    return { loading, characters, hasNextPage }
}
