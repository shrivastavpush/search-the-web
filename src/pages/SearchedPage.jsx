import React from 'react'
import Input from '../components/Input'
import Extras from '../components/Extras'
import FilterNav from '../components/FilterNav'
import KnowledgeGraph from '../components/KnowledgeGraph'

const logo = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"

const SearchedPage = () => {
    return (
        <>
            <div className='container mx-auto flex items-center px-7 py-4 text-[13px]'>
                <div className="left-wrapper mr-10">
                    <img src={logo} alt="logo" className='w-[120px]' />
                </div>
                <Input />
                <Extras />
            </div>

            <FilterNav />

            <main className='container mx-auto px-44 py-4 flex'>
                <div className='flex-1'>
                    <div className="p-5 max-w-8xl mx-auto">
                        {/* <KnowledgeGraph /> */}
                    </div>
                </div>
                <div className='flex-1'>
                    <div className="p-5 max-w-6xl mx-auto">
                        <KnowledgeGraph />
                    </div>
                </div>
            </main>
        </>
    )
}

export default SearchedPage
