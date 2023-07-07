
import {IoIosArrowRoundBack} from 'react-icons/io'
import {AiFillHeart } from 'react-icons/ai'
import {useState} from 'react'

/** 
 * @param {object} props
 * @param {() => void} props.onBack
 * @param {import('../types').Season} props.season
 */
export const Season = (props) => {
  const { onBack, season } = props;
  const [favourited, setFavourited] = useState(false)
  

  return (
    <div >
       <div className="relative h-32 w-32" >
        <div className="absolute inset-x-0 top-0 h-16">
        <button 
        onClick={onBack} 
        className='bg-[#fbfbf2] hover:bg-[#a39ba8] cursor-pointer border-2 border-[#090708] rounded-full text-center font-bold text-[#080708] px-3 py-1'
        >
          <IoIosArrowRoundBack size={30} />
        </button>
        </div>

        </div>

      
      <h2  className="text-3xl font-bold text-[#a07e96] mb-3"> {season.title}</h2>

      <div className='grid'>
        <img  className="rounded-x1 h-12 w-12 object-cover mr-3" alt="POD_IMG"  src={season.image} />
      </div>

      <h3 className="text-2xl font-bold text-[#e9e2e7] mb-3">ALL EPISODES{season.number}</h3>
      {season.episodes .map(({ description, episode, file, title }) => {
        return (
          <div  
            className='flex items-center justify-between space-x-20 cursor-default hover:bg-white/10 py-2 px04 rounded-lg group transition ease-out grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative ' 
            key={title}>
            <div className="text-1xl font-bold text-[#a07e96] mb-3">{title}</div>
            <div className="flex items-center justify-between ml-auto md:ml-0 ">
              <p className=' text-lg font-normal text-[#e9e2e7] w-40 hidden md:inline w-36 lg:w-64 truncate'>{description}</p> 
              <div className='md:ml-auto flex items-center space-x-2.5'>
              <div className='flex items-center rounded -full  w-[85px] h-[10] relative cursor-pointer group-hover: border-white/40'>

                
                <AiFillHeart 
                key={title}
                className={`text-xl ml-3 hover:scale-125 transition-all duration-150 ease-out ${favourited ? "text-[#a07e96]" : "text-[#868686]" }`}
                onClick={() => setFavourited(!favourited)}
                />
                </div>
              </div>
            </div>
            <div className="text-lg font-normal text-[#a07e96]">
              <span className='text-[#e9e2e7] font-semibold'>{episode}</span>
            </div>
            <audio controls src={file} />
          </div>
          

        );
      })}
     </div>
     
  
    
  );
};

export default Season;

/**
 *  <div className='flex items-center justify-between space-x-20 cursor-default hover:bg-white/10 py-2 px04 rounded-lg group transition ease-out'>
        
        <div className='flex items-center'>

            <img  
            src={comedyShows.map((comedy => comedy.image))} 
            alt="" 
            className='rounded-x1 h-12 w-12 object-cover mr-3'/>
        </div>
        <div>
            <h4 className='text-[#e9e2e7] text-sm font-semibold truncate w-[450px]'>
                <span className='text-[#e9e2e7] font-semibold'>EPISODE 1: </span>
                From Commoner to Royalty
            </h4>
            <p className='text-[#a07e96] text-sm'>SEASON 1</p>
            <audio key='6807'  preload='none' controls controlsList='nodownload' className='w-100'>
                <source src="https://podcast-api.netlify.app/placeholder-audio.mp3" type='audio/mp3'/>
            </audio>
        </div>
 */