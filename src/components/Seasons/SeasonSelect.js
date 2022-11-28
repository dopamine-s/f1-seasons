import classes from './SeasonSelect.module.css';

const SeasonSelect = (props) => {
  const changeSeasonYearHandler = (event) => {
    const yearFilterValue = event.target.value;

    props.onChangeYearFilter(yearFilterValue);
  };

  return (
    <div className={classes['season-select']}>
      <div className={classes.control}>
        <label>Select season:</label>
        <select value={props.selected} onChange={changeSeasonYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default SeasonSelect;
