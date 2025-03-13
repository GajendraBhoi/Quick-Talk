import React from 'react'
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <div>
        <div className='h-[10vh]'>
            <form action="" className='w[100%]'>
                <div className='flex gap-7'>
                    <label className="input w-3xl">
                        <input type="search" className="grow" placeholder="Search" />
                    </label>
                    <button className=''>
                        <FaSearch />
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Search