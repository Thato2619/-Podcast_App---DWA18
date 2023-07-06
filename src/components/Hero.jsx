import React from 'react'

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
            
        />

    </div>
  )
}

export default Hero