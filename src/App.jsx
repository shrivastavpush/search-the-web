import React from 'react'
import Home from './pages/Home'
import SearchedPage from './pages/SearchedPage'
import { useSearch } from './context/useSearch'
const App = () => {

    const { searchQuery } = useSearch()

    return (
        <>
            {searchQuery ? <SearchedPage /> : <Home />}
        </>
    )
}

export default App
