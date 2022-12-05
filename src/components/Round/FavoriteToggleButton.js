import classes from './FavoriteToggleButton.module.css';

const FavoriteToggleButton = (props) => {
  const toggleHandler = () => {
    const selectedFavorite = {
      driverId: props.driverId,
      dateOfBirth: props.dateOfBirth,
      givenName: props.givenName,
      familyName: props.familyName,
      code: props.code,
      nationality: props.nationality,
      permanentNumber: props.permanentNumber,
    };
    props.onToggle(selectedFavorite);
  };

  return (
    <>
      <button className={classes.button} onClick={toggleHandler}>
        <span className={classes.plus}>{props.isFavorite ? 'F' : '+'}</span>
        {/* <span className={classes.plus}>F</span> */}
        <span className={classes.words}>
          {props.isFavorite ? 'Delete Fav' : 'Add to Fav'}
          {/* Add / Remove */}
        </span>
      </button>
    </>
  );
};

export default FavoriteToggleButton;
