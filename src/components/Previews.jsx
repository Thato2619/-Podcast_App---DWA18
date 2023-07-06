import { GENRE_MAP, calcDisplayDate } from "../utils";
import { useState } from "react";
import Show from "./Show";
import {GiHeadphones} from 'react-icons/gi'



  
 

/**
 * @param {object} props
 * @param {number} props.genre
 * @param {string} props.search
 * @param {(id: number) => void} props.onSelect
 * @param {import('../types').Show[]} props.list
 */
export const Previews = (props) => {
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
    
      <div className='flex justify-between items-center px-4 py-4'>
        <div className='flex items-center gap-1'>
            <GiHeadphones size={30} className="text-[#a07e96]"/>
            <h1 className='text-3xl text-[#a07e96] font-bold font-tilt'>UNPLUGGED PODCAST</h1>
      </div>

      <div>

      </div>

      </div>
     <div classsName="pb-10  py-4 px-4 bg-[#202020] text-[#e9e2e7] text-sm flex flex-wrap justify-between border border-l-0 border-r-0 border-t-[0.4px] border-b-[1px] border-[#a07e96] py-4 px-6">
       
          <a href='/'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Home</button>
          </a>
          <a href='/growth'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Personal Growth</button>
          </a>
          <a href='/investigative'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Investigative Journalism</button>
          </a>
          <a href='/history'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">History</button>
          </a>
          <a href='/comedy'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Comedy</button>
          </a>
          <a href='/entertainment'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Entertainment</button>
          </a>
          <a href='/business'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Business</button>
          </a>
          <a href='/fiction'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Fiction</button>
          </a>
          <a href='/news'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">News</button>
          </a>
          <a href='/kids-family'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Kids & Family</button>
          </a>
    </div>

      <div>
        <input 
          type='text'
          placeholder='Search'
          className=' hidden md:flex w-full px-4 py-2 text-zinc-200 bg-zinc-900 border-[1px] border-zinc-700 focus:bg-black  focus:outline-none focus:ring-[1px] ring-[#a07e96] placeholder:text-zinc-400'
          value={search}
          onChange-={filteredList.filter((Show) => Show.title)}
        />
      </div>
      <div className="animate-slideup rounded-lg cursor-pointer">
        <div className="backdrop-blur animate-slideup">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group">
            {/**
             * /**
            * @type {(import('./types').Sorting')}
            */
             }
            {filteredList
            //.sort((a,b) => a.title > b.title ? 1: -1) // sort from a-z 
            //.sort((b,a) => b.title > a.title ? -1: 1) // sort from z-a
            //.sort((a,b) => a.updated > b.updated ? 1: -1) // sort from oldest - newest
            .sort((b,a) => b.updated > a.updated ? -1: 1) // sort from newest - oldest

            .map(
              ({ id, image, seasons, title, genres, updated }) => {
                return (
                  <button
                    className="shadow-lg rounded-lg p-4 bg-white/5 bg-opacity-80 backdrop-blur"
                    key={id}
                    onClick={() => onSelect(id)}
                  >
                    <img className="rounded-t-lg" alt="POD_IMG" src={image} />

                    <div className="p-3">
                      <h3 className="text-3xl font-bold text-[#e9e2e7] mb-3">
                        {title}
                      </h3>

                      <p className="text-lg text-[#e9e2e7]">
                        <span className="text-lg font-bold text-[#e9e2e7]">
                          Season:
                        </span>
                        <span> {seasons}</span>
                      </p>

                      <ul>
                        {genres.map((genreId) => (
                          <li  className="text-lg font-bold text-[#a07e96]" key={genreId}>{GENRE_MAP[genreId]}</li>
                        ))}
                      </ul>

                      <h5 className="text-lg font-normal text-[#e9e2e7]">
                      <span className="text-lg font-bold text-[#e9e2e7]">Updated</span>: {calcDisplayDate(updated)}
                      </h5>

                     
                    </div>
                  </button>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Previews;
