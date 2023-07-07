import React from 'react'
import {BsFillPauseFill, BsFillPlayFill  } from 'react-icons/bs'

function Hero({props}) {
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
    <div className='w-[250px] h-[360px] rounded-[50px] overflow-hidden relative text-white/80 cursor-pointer hover:scal-105 hover:text-white/100 transition duration-200 ease-out group mx-auto '>
        <img 
            src={filteredList.map({image})}
            alt=""
            className='h-full w-full,absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100'
        />
        <div className='absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5 '>
            <div className='h-10 w-10 bg[#a07e96] rounded-full flex items-center justify-center group-hover:bg[#a07e96] flex-shrink-0'>
                <BsFillPauseFill  className='text-xl'/>
                <BsFillPlayFill  className='text-xl ml-[1px] '/>
            </div>
        </div>
    </div>
  )
}

export default Hero