import classes from './FavoriteAddButton.module.css';

const FavoriteAddButton = (props) => {
  const addHandler = () => {
    const addedFavorite = {
      id: props.id,
      driverId: props.driverId,
      dateOfBirth: props.dateOfBirth,
      givenName: props.givenName,
      familyName: props.familyName,
      code: props.code,
      nationality: props.nationality,
      permanentNumber: props.permanentNumber,
    };
    props.onAdd(addedFavorite);
  };

  return (
    <>
      <button className={classes.button} onClick={addHandler}>
        <span className={classes.plus}>+</span>
        <span className={classes.words}> Add to Fav</span>
      </button>
    </>
  );
};

export default FavoriteAddButton;
