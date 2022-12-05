import classes from './FavoriteToggleButton.module.css';
const FavoriteToggleButton = (props) => {
  const toggleHandler = () => {
    const selectedFavorite = {
      id: props.id,
      driverId: props.driverId,
      dateOfBirth: props.dateOfBirth,
      givenName: props.givenName,
      familyName: props.familyName,
      code: props.code,
      nationality: props.nationality,
      permanentNumber: props.permanentNumber,
    };
    props.onToggle(selectedFavorite);
    console.log(props);
  };

  return (
    <>
      <button className={classes.button} onClick={toggleHandler}>
        <span className={classes.plus}>+</span>
        <span className={classes.words}> toggle Fav</span>
      </button>
    </>
  );
};

export default FavoriteToggleButton;
