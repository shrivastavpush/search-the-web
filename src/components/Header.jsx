import React from 'react'
import { IoMdApps } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMiniBeaker } from "react-icons/hi2";

const Header = () => {

    const about = "https://about.google/?fg=1"
    const store = "https://store.google.com/?hl=en-US"
    const gmail = "https://mail.google.com/mail/u/0/?ogbl"
    const images = "https://images.google.com"
    const labs = "https://labs.google.com/search/install?source=hp&authuser=0"

    const linkClass = "hover:underline cursor-pointer text-[#1f1f1f]"

    return (
        <header className='flex items-center justify-between py-5 px-6 text-[13px]'>
            <div className='flex items-center gap-5'>
                <a href={about} className={linkClass}>About</a>
                <a href={store} className={linkClass}>Store</a>
            </div>
            <div className='flex items-center gap-5'>
                <a href={gmail} className={linkClass}>Gmail</a>
                <a href={images} className={linkClass}>Images</a>
                <div className='flex items-center gap-4'>
                    <a href={labs}>
                        <HiMiniBeaker className='cursor-pointer text-[#1f1f1f] text-xl' />
                    </a>
                    <IoMdApps className='cursor-pointer text-[#1f1f1f] text-xl' />
                    <FaRegUserCircle className='cursor-pointer text-[#1f1f1f] text-xl' />
                </div>
            </div>
        </header>
    )
}

export default Header
