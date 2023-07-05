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
      <h2>Info</h2>
      <button onClick={onBack}>BACK</button>

      <ul>
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

      <h2>Seasons</h2>

      <div>
        {show.seasons.map(({ image, number, title, updated, season }) => {
          return (
            <button key={season} onClick={() => onSelect(season)}>
              <img src={image} />
              <h3>{title}</h3>
              <div>#{number}</div>
              <div>Updated: {calcDisplayDate(updated)}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Show;
