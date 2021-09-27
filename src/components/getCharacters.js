import { useEffect, useState } from 'react'
import axios from 'axios'

//needs capital G?
export default function GetCharacters(pageNumber, searchInput) {
    const [loading, setLoading] = useState(true)
    const [characters, setCharacters] = useState([])
    const [hasNextPage, setHasNextPage] = useState(true)

    useEffect(() => {
        let cancel
        setHasNextPage(true)
        setLoading(true)
        axios({
            method: 'GET',
            url: `https://swapi.dev/api/people/?search=${searchInput}&page=${pageNumber}&format=json`,
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setCharacters(prev => { return [...prev, ...res.data.results] })
            if (res.data.next === null) {
                setHasNextPage(false)
            }
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
        })
        return () => cancel()
    }, [pageNumber, searchInput])
    return { loading, characters, hasNextPage, setCharacters }
}