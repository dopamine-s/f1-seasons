import classes from './FavoriteAddButton.module.css';

const FavoriteAddButton = (props) => {
  const addHandler = () => {
    console.log(props.driverId);

    // props.onAdd(props.driverId);
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
