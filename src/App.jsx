import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './pages/Home'
import SearchedPage from './pages/SearchedPage'
import { SearchProvider } from './context/useSearch'

const queryClient = new QueryClient()

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <SearchProvider>
                <div>
                    <Home />
                    <SearchedPage />
                </div>
            </SearchProvider>
        </QueryClientProvider>
    )
}

export default App
