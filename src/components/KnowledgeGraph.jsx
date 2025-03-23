import React from 'react'
import data from '../data/coffeeData.json'

const knowledgeGraphData = data.knowledge_graph

const KnowledgeGraph = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold text-gray-900">{knowledgeGraphData.title}</h1>
            <p className="text-gray-500 text-sm">{knowledgeGraphData.type}</p>
            <a href={knowledgeGraphData.knowledge_graph_search_link} className="text-blue-500 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                View on Google
            </a>

            <p className="mt-4 text-gray-700 leading-relaxed">
                {knowledgeGraphData.description}
            </p>

            <a href={knowledgeGraphData.sources_include_links[0].link} className="text-blue-500 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                Source: Wikipedia
            </a>

            <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-3 rounded-md">
                    <h2 className="text-sm font-semibold">Color</h2>
                    <p className="text-gray-600 text-sm">{knowledgeGraphData.sources_include_links[1].snippet}</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                    <h2 className="text-sm font-semibold">Flavor</h2>
                    <p className="text-gray-600 text-sm">{knowledgeGraphData.sources_include_links[2].snippet}</p>
                </div>
            </div>

            <h2 className="mt-6 text-lg font-semibold">Nutrition Facts</h2>
            <table className="w-full mt-2 border border-gray-300 text-sm">
                <tbody>
                    {Object.entries(knowledgeGraphData.list).map(([key, value], index) => (
                        <tr key={index} className="border-b border-gray-200">
                            <td className="p-2 text-gray-700 font-medium">{key.replace('_', ' ')}</td>
                            <td className="p-2 text-gray-600">{value[0]}</td>
                            <td className="p-2 text-gray-600">{value[1] || '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default KnowledgeGraph
