import raceFlag from '../../images/race-flag.svg';
import classes from './RoundFlagItem.module.css';

const RoundFlagItem = (props) => {
  return (
    <>
      <img
        className={classes.flag}
        src={raceFlag}
        width="15%"
        title="Country Flag"
        alt={props.country}
      />
    </>
  );
};

export default RoundFlagItem;
