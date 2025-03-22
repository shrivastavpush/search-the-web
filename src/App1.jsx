import { useState } from 'react'
import useFetch from './hooks/useFetch'
import './App.css'
import { FaSearch } from 'react-icons/fa'
import { ImSpinner2 } from 'react-icons/im'
import { searchData } from './data/searchData'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  // const { data, isLoading } = useFetch(searchQuery)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 500) // Simulate loading
  }

  const filteredResults = searchQuery
    ? searchData.organic_results.filter(result =>
      result.title.toLowerCase().includes(searchData.search_parameters.q.toLowerCase()) ||
      result.snippet.toLowerCase().includes(searchData.search_parameters.q.toLowerCase())
    )
    : []

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4">
        {/* Search Header */}
        <div className="flex flex-col items-center justify-center min-h-[40vh]">
          <h1 className="text-8xl font-bold mb-8">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </h1>

          <form onSubmit={handleSubmit} className="w-full max-w-2xl">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Google..."
                className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200 text-lg pr-12"
              />
              <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                {isLoading ? <ImSpinner2 className="animate-spin" /> : <FaSearch />}
              </button>
            </div>
          </form>
        </div>

        {/* Search Results */}
        {/* {data && data.organic_results && ( */}
        {searchQuery && filteredResults.length > 0 && (
          <div className="max-w-3xl mx-auto mt-8 pb-8">
            <p className="text-sm text-gray-600 mb-4">
              {/* About {data.organic_results.length} results */}
              About {filteredResults.length} results
            </p>
            {/* {data.organic_results.map((result, index) => ( */}
            {filteredResults.map((result, index) => (
              <div key={index} className="mb-8">
                <div className="flex flex-col">
                  <a
                    href={result.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 mb-1 hover:underline"
                  >
                    {result.link}
                  </a>
                  <a
                    href={result.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-blue-600 hover:underline mb-1"
                  >
                    {result.title}
                  </a>
                </div>
                <p className="text-sm text-gray-600">
                  {result.snippet}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
