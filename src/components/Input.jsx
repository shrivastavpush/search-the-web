import React, { useRef, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { SiGooglelens } from "react-icons/si";

const Input = () => {

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className='flex items-center justify-between w-xl h-12 rounded-full border-1 border-[#dfe1e5] shadow-md px-5'>
            <CiSearch className='w-5 h-5 font-bold' />
            <label htmlFor="searchInput" className='w-full'>
                <input ref={inputRef} type="text"
                    id="searchInput"
                    className='p-2 outline-none'
                />
            </label>
            <div className='flex items-center gap-4'>
                <FaMicrophone className='w-5 h-5 font-bold cursor-pointer' />
                <SiGooglelens className='w-5 h-5 font-bold cursor-pointer' />
            </div>
        </div>
    )
}

export default Input
