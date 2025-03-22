import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMiniBeaker } from "react-icons/hi2";
const Header = () => {
    return (
        <header className='flex items-center justify-between py-5 px-6 text-[13px]'>
            <div className='flex items-center gap-5'>
                <a href="https://about.google/?fg=1" className='hover:underline cursor-pointer text-[#1f1f1f]'>About</a>
                <a href="https://store.google.com/?hl=en-US" className='hover:underline cursor-pointer text-[#1f1f1f]'>Store</a>
            </div>
            <div className='flex items-center gap-5'>
                <a href="https://mail.google.com/mail/u/0/?ogbl" className='hover:underline cursor-pointer text-[#1f1f1f]'>Gmail</a>
                <a href="https://images.google.com" className='hover:underline cursor-pointer text-[#1f1f1f]'>Images</a>
                <div className='flex items-center gap-4'>
                    <a href="https://labs.google.com/search/install?source=hp&authuser=0">
                        <HiMiniBeaker className='cursor-pointer text-[#1f1f1f] text-xl' />
                    </a>
                    <CiMenuKebab className='cursor-pointer text-[#1f1f1f] text-xl' />
                    <FaRegUserCircle className='cursor-pointer text-[#1f1f1f] text-xl' />
                </div>
            </div>
        </header>
    )
}

export default Header
