import React from 'react'
import Input from '../components/Input'
import Extras from '../components/Extras'
import { iplData } from '../data/iplData'

const logo = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"

const SearchedPage = () => {
    return (
        <>
            <div className='container mx-auto flex items-center justify-between px-7 py-4 text-[13px]'>
                <div className="left-wrapper">
                    <img src={logo} alt="logo" className='w-[120px]' />
                </div>
                <Input />
                <Extras />
            </div>
            <div className='flex items-center gap-2'>
                <p>{iplData.search_metadata.total_time_taken} seconds</p>
            </div>
            <main className='container mx-auto px-7 py-4'>
                <div className="p-6 max-w-7xl mx-auto">
                    {/* Sports Results Section */}
                    {iplData.sports_results && (
                        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold mb-4">{iplData.sports_results.title}</h2>

                            {/* Live Game Spotlight */}
                            {iplData.sports_results.game_spotlight && (
                                <div className="mb-6 border-b pb-6">
                                    <h3 className="text-xl font-semibold mb-3">Live Match</h3>
                                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                                        <div className="flex items-center space-x-4">
                                            <img src={iplData.sports_results.game_spotlight.teams[0].thumbnail}
                                                alt={iplData.sports_results.game_spotlight.teams[0].name}
                                                className="w-12 h-12" />
                                            <div>
                                                <p className="font-bold">{iplData.sports_results.game_spotlight.teams[0].name}</p>
                                                <p className="text-gray-600">{iplData.sports_results.game_spotlight.teams[0].score}</p>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-red-600 font-bold">{iplData.sports_results.game_spotlight.status}</p>
                                            <p className="text-sm text-gray-500">{iplData.sports_results.game_spotlight.venue}</p>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="text-right">
                                                <p className="font-bold">{iplData.sports_results.game_spotlight.teams[1].name}</p>
                                                <p className="text-gray-600">{iplData.sports_results.game_spotlight.teams[1].score}</p>
                                            </div>
                                            <img src={iplData.sports_results.game_spotlight.teams[1].thumbnail}
                                                alt={iplData.sports_results.game_spotlight.teams[1].name}
                                                className="w-12 h-12" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Upcoming Matches */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-3">Upcoming Matches</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {iplData.sports_results.games.map((game, index) => (
                                        <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center space-x-3">
                                                    <img src={game.teams[0].thumbnail} alt={game.teams[0].name} className="w-8 h-8" />
                                                    <span className="font-medium">{game.teams[0].name}</span>
                                                </div>
                                                <span className="text-sm text-gray-500">vs</span>
                                                <div className="flex items-center space-x-3">
                                                    <span className="font-medium">{game.teams[1].name}</span>
                                                    <img src={game.teams[1].thumbnail} alt={game.teams[1].name} className="w-8 h-8" />
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm text-gray-600">
                                                <p>{game.venue}</p>
                                                <p>{game.date} - {game.status}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Knowledge Graph Section */}
                    {iplData.knowledge_graph && (
                        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-start space-x-6">
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold mb-2">{iplData.knowledge_graph.title}</h2>
                                    <p className="text-gray-600 mb-4">{iplData.knowledge_graph.type}</p>
                                    <p className="text-gray-700 mb-4">{iplData.knowledge_graph.description}</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500">Founded</p>
                                            <p className="font-medium">{iplData.knowledge_graph.founded}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Administrator</p>
                                            <p className="font-medium">{iplData.knowledge_graph.administrator}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Format</p>
                                            <p className="font-medium">{iplData.knowledge_graph.format}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Most Successful</p>
                                            <p className="font-medium">{iplData.knowledge_graph.most_successful}</p>
                                        </div>
                                    </div>
                                </div>
                                {iplData.knowledge_graph.header_images && (
                                    <img
                                        src={iplData.knowledge_graph.header_images[0].image}
                                        alt={iplData.knowledge_graph.title}
                                        className="w-48 h-48 object-contain rounded-lg"
                                    />
                                )}
                            </div>
                        </div>
                    )}

                    {/* Organic Results */}
                    {iplData.organic_results && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold mb-4">Search Results</h2>
                            <div className="space-y-6">
                                {iplData.organic_results.map((result, index) => (
                                    <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                                        <a href={result.link} target="_blank" rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline text-lg font-medium">
                                            {result.title}
                                        </a>
                                        <p className="text-sm text-gray-600 mb-1">{result.displayed_link}</p>
                                        <p className="text-gray-700">{result.snippet}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}

export default SearchedPage
