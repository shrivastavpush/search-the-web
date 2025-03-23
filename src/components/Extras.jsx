import { IoMdApps } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMiniBeaker } from "react-icons/hi2";
import { useSearch } from "../context/useSearch";
const Extras = () => {

    const { searchQuery } = useSearch()

    const labs = "https://labs.google.com/search/install?source=hp&authuser=0"

    return (
        <div className={`flex items-center gap-6 justify-end ${searchQuery ? 'hidden' : ''}`}>
            <a href={labs}>
                <HiMiniBeaker className='cursor-pointer text-[#1f1f1f] text-xl' />
            </a>
            <IoMdApps className='cursor-pointer text-[#1f1f1f] text-xl' />
            <FaRegUserCircle className='cursor-pointer text-[#1f1f1f] text-xl' />
        </div>
    )
}

export default Extras
