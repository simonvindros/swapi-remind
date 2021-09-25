import { useEffect, useState } from 'react'
import axios from 'axios'

//varför måste den ha capital G?
export default function GetCharacters(pageNumber) {
    const [loading, setLoading] = useState(true)
    const [characters, setCharacters] = useState([])
    const [hasNextPage, setHasNextPage] = useState(true)

    useEffect(() => {
        setLoading(true)
        // let cancel
        axios({
            method: 'GET',
            url: `https://swapi.dev/api/people/?page=${pageNumber}&format=json`,
            // params: { page: pageNumber },
            // cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => { /* previous */
            // setCharacters(previousCharacters => {
            //     return [...previousCharacters, res.data.results]
            // })
            //setCharacters(prev => { return [...new Set([...prev, ...res.data.results])] })
            setCharacters(prev => { return [...prev, ...res.data.results] })
            if (res.data.next === null) {
                setHasNextPage(false)
            }
            setLoading(false)
            console.log('AXIOS RES', res.data)
            console.log('characters', characters)
            console.log('nextPage', hasNextPage)
        })
        // .catch(e => {
        //     if (axios.isCancel(e)) return
        // })
        //, hasNextPage, characters
    }, [pageNumber])
    return { loading, characters, hasNextPage }

}
