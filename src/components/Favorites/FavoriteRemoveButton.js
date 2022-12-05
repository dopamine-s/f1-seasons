import classes from './FavoriteRemoveButton.module.css';

const FavoriteRemoveButton = (props) => {
  const deleteHandler = () => {
    props.onRemove(props.driverId);
  };

  return (
    <>
      <button className={classes.button} onClick={deleteHandler}>
        {props.info}
      </button>
    </>
  );
};

export default FavoriteRemoveButton;
