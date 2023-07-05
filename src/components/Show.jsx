import { calcDisplayDate } from "../utils";

/**
 * @param {object} props
 * @param {() => void} props.onBack
 * @param {(id: number) => void} props.onSelect
 * @param {import('../types').Show} props.show
 */
export const Show = (props) => {
  const { onBack, onSelect, show } = props;

  return (
    <div>
      <h2 className="text-3xl text-[#e9e2e7] font-bold">ALL SEASONS</h2>
      <button onClick={onBack}>BACK</button>

      
      

      <div>
      <div className="animate-slideup rounded-lg cursor-pointer">
        <div className="backdrop-blur animate-slideup">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group">
        {show.seasons.map(({ image, number, title, updated, season }) => {
          return (
            <button  className="shadow-lg rounded-lg p-4 bg-white/5 bg-opacity-80 backdrop-blur" key={season} onClick={() => onSelect(season)}>
              <img  src={image} className="rounded-t-lg" alt="POD_IMG" />
              <h3 className="text-3xl font-bold text-[#e9e2e7] mb-3">{title}</h3>
            </button>
          );
        })}
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Show;

/**
 * <ul>
        <li>
          <img src={show.image} />
        </li>

        <li>{show.title}</li>
        <li>Updated: {calcDisplayDate(show.updated)}</li>

        <li>
          Genres:
          <ul>
            {show.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </li>
      </ul>

 */