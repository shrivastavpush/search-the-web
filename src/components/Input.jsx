import React, { useRef, useEffect } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { SiGooglelens } from "react-icons/si";
import { IoMdClose } from "react-icons/io";
import { useSearch } from '../context/useSearch'

const Input = () => {
    const { searchQuery, setSearchQuery } = useSearch()

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className='flex items-center justify-between w-xl h-12 rounded-full border-1 border-[#dfe1e5] shadow-md px-4'>
            <IoIosSearch className='scale-150 text-[#9aa0a6]' onClick={() => inputRef.current.focus()} />
            <label htmlFor="searchInput" className='w-full'>
                <input ref={inputRef} type="text"
                    id="searchInput"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='py-2 px-4 outline-none w-full'
                />
            </label>

            <div className='flex items-center gap-4 scale-125 pr-3'>
                {searchQuery &&
                    <IoMdClose className='scale-150 text-[#9aa0a6] cursor-pointer' onClick={() => setSearchQuery('')} />}
                <FaMicrophone className='text-[#4285f4] cursor-pointer' />
                <SiGooglelens className='text-[#34a853] cursor-pointer' />
            </div>
        </div>
    )
}

export default Input
