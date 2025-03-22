import React from 'react'

const Footer = () => {

    const advertising = "https://business.google.com/in/google-ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&fg=1"
    const business = "https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
    const howSearchWorks = "https://google.com/search/howsearchworks/?fg=1"
    const privacy = "https://policies.google.com/privacy?hl=en-IN&fg=1"
    const terms = "https://policies.google.com/terms?hl=en-IN&fg=1"

    return (
        <>
            <footer className='flex items-center justify-between py-3 px-7 bg-[#f2f2f2] text-[14px]'>
                <div className='flex items-center gap-6'>
                    <p>India</p>
                </div>
            </footer>

            <footer className='flex items-center justify-between py-3 px-7 border-t-[#dadce0] border-t-1 bg-[#f2f2f2] text-[14px]' >
                <div className='flex items-center gap-6'>
                    <a href={advertising} className='hover:underline cursor-pointer text-[#1f1f1f]'>Advertising</a>
                    <a href={business} className='hover:underline cursor-pointer text-[#1f1f1f]'>Business</a>
                    <a href={howSearchWorks} className='hover:underline cursor-pointer text-[#1f1f1f]'>How Search Works</a>
                </div>
                <div className='flex items-center gap-6'>
                    <a href={privacy} className='hover:underline cursor-pointer text-[#1f1f1f]'>Privacy</a>
                    <a href={terms} className='hover:underline cursor-pointer text-[#1f1f1f]'>Terms</a>
                    <a className='hover:underline cursor-pointer text-[#1f1f1f]'>Settings</a>
                </div>
            </footer>
        </>
    )
}

export default Footer 
