import React from 'react'
import Input from '../components/Input'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {

    const lang = ["हिन्दी", "বাংলা", "తెలుగు", "मराठी", "தமிழ்", "ગુજરાતી", "ಕನ್ನಡ", "മലയാളം", "ਪੰਜਾਬੀ"]
    const doodle = "https://www.google.com/logos/doodles/2025/indian-premier-league-2025-begins-6753651837110716-None-cst.png"

    return (
        <div className='flex flex-col h-screen container mx-auto'>
            <Header />

            <div className='flex items-center justify-center flex-col h-full'>
                <div className='mb-10'>
                    <img src={doodle} alt="doodle" />
                </div>
                <Input />
                <div className='flex items-center justify-center gap-4 my-8'>
                    <button type='submit' className='text-[#3c4043] px-4 py-2 rounded-md bg-[#f8f9fa] border-1 border-[#f8f9fa] hover:border-[#dadce0] cursor-pointer'>Google Search</button>
                    <button type='submit' className='text-[#3c4043] px-4 py-2 rounded-md bg-[#f8f9fa] border-1 border-[#f8f9fa] hover:border-[#dadce0] cursor-pointer'>I'm Feeling Lucky</button>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <span className='text-[#3c4043] text-[13px]'>Google offered in:</span>
                    {lang.map((item, index) => (
                        <a key={index} className='text-[#1a0dab] text-[13px] cursor-pointer hover:underline'>{item}</a>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home
