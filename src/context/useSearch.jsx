import React, { useContext, createContext, useState } from 'react'
import useFetch from '../hooks/useFetch'

const SearchContext = createContext()

export const useSearch = () => {
    return useContext(SearchContext)
}

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('ipl 2025')

    // const { data, isLoading } = useFetch(searchQuery)

    return (
        <SearchContext.Provider value={{
            searchQuery,
            setSearchQuery,
            isLoading,
            handleSubmit,
            results: data?.organic_results || []
        }}>
            {children}
        </SearchContext.Provider>
    )
}
