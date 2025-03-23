import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

const useFetch = (initialQuery) => {
    const [debouncedQuery, setDebouncedQuery] = useState(initialQuery)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(initialQuery)
        }, 500)

        return () => clearTimeout(timer)
    }, [initialQuery])

    const { data, isLoading, error } = useQuery({
        queryKey: ['searchData', debouncedQuery],
        queryFn: () => fetchData(debouncedQuery),
        enabled: !!debouncedQuery && debouncedQuery.trim() !== '',
    })
    return { data, isLoading, error }
}

const fetchData = async (query) => {

    // q=Coffee&location=India&google_domain=google.co.in&gl=in&hl=en

    const url = `https://www.searchapi.io/api/v1/search?engine=google&api_key=${import.meta.env.VITE_SEARCH_API_KEY}&q=${query}&location=India&gl=in&hl=en`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return data
}

export default useFetch
