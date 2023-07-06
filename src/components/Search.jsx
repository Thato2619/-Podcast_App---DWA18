
import React from 'react'
import { GENRE_MAP, calcDisplayDate } from "../utils";
/**
 * @param {object} props
 * @param {number} props.genre
 * @param {string} props.search
 * @param {(id: number) => void} props.onSelect
 * @param {import('../types').Show[]} props.list
 */

function Search({props}) {
    const { list, genre, search, onSelect } = props;

    const filteredList = list.filter((show) => {
        if (!genre && search === "") return true;
        const isGenreMatch = show.genres.includes(genre);
        const isSearchMatch = show.title
        .toLowerCase()
        .includes(search.toLowerCase());
    
        if (search === "" && isGenreMatch) return true;
        if (!genre && isSearchMatch) return true;
        if (isGenreMatch && isSearchMatch) return true;
        return false;
      });
  return (
    <div> 
        <div className='flex w-full' onSubmit={filteredList}>
            <input 
                type='text'
                placeholder='Search'
                className=' hidden md:flex w-full px-4 py-2 text-zinc-200 bg-zinc-900 border-[1px] border-zinc-700 focus:bg-black  focus:outline-none focus:ring-[1px] ring-[#a07e96] placeholder:text-zinc-400'
                value=""
                onChange={onSelect}
            /> 
           
           
            <button type='submit'  className=' hidden md:flex bg-zinc-700 px-5 py-3 '>
                <GrSearch size={20} />
            </button>
        </div>
        </div>
    
  )
}

export default Search
