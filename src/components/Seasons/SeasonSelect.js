import classes from './SeasonSelect.module.css';

const SeasonSelect = (props) => {
  const changeSeasonYearHandler = (event) => {
    const seasonYear = event.target.value;

    props.onChangeSeason(seasonYear);
  };

  const reversed = props.seasons.sort((a, b) => b.season - a.season);
  console.log('reversed', reversed);
  console.log('props.seasons', props.seasons);

  return (
    <div className={classes['season-select']}>
      <div className={classes.control}>
        <label>Select season:</label>
        <select value={props.selected} onChange={changeSeasonYearHandler}>
          {props.seasons.length > 0 ? (
            reversed.map((season) => (
              <option key={season.season}>{season.season}</option>
            ))
          ) : (
            <option key={'2022'}>{props.selected}</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default SeasonSelect;
