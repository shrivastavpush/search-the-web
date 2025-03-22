import React, { useContext, createContext, useState } from 'react'
import useFetch from '../hooks/useFetch'

const SearchContext = createContext()

export const useSearch = () => {
    return useContext(SearchContext)
}

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('')

    // const { data, isLoading } = useFetch(searchQuery)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <SearchContext.Provider value={{
            searchQuery,
            setSearchQuery,
            // isLoading,
            handleSubmit,
            // results: data?.organic_results || []
        }}>
            {children}
        </SearchContext.Provider>
    )
}
