import React from 'react'
import { iplData } from '../data/iplData'
import { FaNewspaper, FaImage, FaVideo, FaShoppingCart, FaEllipsisV } from 'react-icons/fa';

const FilterNav = () => {
    const filters = [
        { name: "All", active: true, icon: null },
        { name: "News", icon: <FaNewspaper /> },
        { name: "Images", icon: <FaImage /> },
        { name: "Videos", icon: <FaVideo /> },
        { name: "Shopping", icon: <FaShoppingCart /> },
        { name: "More", icon: <FaEllipsisV /> },
    ]

    return (
        <div className="container mx-auto px-36">
            <div className='flex items-center space-x-8 text-sm px-14  border-b-[.5px] border-gray-200 '>
                {filters.map((filter, index) => (
                    <a
                        key={index}
                        href="#"
                        className={`flex items-center py-3 ${filter.active ? 'text-black border-b-[2px] border-black' : 'text-gray-600 hover:text-black'}`}
                    >
                        {filter.icon && <span className="mr-2">{filter.icon}</span>}
                        {filter.name}
                    </a>
                ))}
            </div>
            <div className='flex items-center gap-2'>
                <p>{iplData.search_metadata.total_time_taken} seconds</p>
            </div>
        </div>
    )
}

export default FilterNav
