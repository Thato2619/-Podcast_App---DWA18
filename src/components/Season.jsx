/**
 * @param {object} props
 * @param {() => void} props.onBack
 * @param {import('../types').Season} props.season
 */
export const Season = (props) => {
  const { onBack, season } = props;

  return (
    <div>
      <button onClick={onBack}>BACK</button>

      <img src={season.image} />
      <h2>{season.title}</h2>
      <h3>#{season.number}</h3>
      {season.episodes.map(({ description, episode, file, title }) => {
        return (
          <div key={title}>
            <div>{title}</div>
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
