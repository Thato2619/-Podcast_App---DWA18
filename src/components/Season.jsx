
import {IoIosArrowRoundBack} from 'react-icons/io'
/** 
 * @param {object} props
 * @param {() => void} props.onBack
 * @param {import('../types').Season} props.season
 */
export const Season = (props) => {
  const { onBack, season } = props;

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


      <img  className="rounded-t-lg" alt="POD_IMG"  src={season.image} />
      <h2  className="text-3xl font-bold text-[#a07e96] mb-3"> {season.title}</h2>

      <h3 className="text-2xl font-normal text-[#a07e96] mb-3">#{season.number}</h3>
      {season.episodes.map(({ description, episode, file, title }) => {
        return (
          <div key={title}>
            <div className="text-1xl font-bold text-[#a07e96] mb-3">{title}</div>
            <div>{description}</div>
            <div>#{episode}</div>
            <audio controls src={file} />
          </div>
        );
      })}
     
      </div>
  
    
  );
};

export default Season;
