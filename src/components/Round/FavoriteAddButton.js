import classes from './FavoriteAddButton.module.css';

const FavoriteAddButton = (props) => {
  const addHandler = () => {
    console.log(props.driverId);

    // props.onAdd(props.driverId);
  };

  return (
    <>
      <button className={classes.button} onClick={addHandler}>
        {props.info}
      </button>
    </>
  );
};

export default FavoriteAddButton;
