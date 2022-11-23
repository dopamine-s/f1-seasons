import classes from './FavoriteRemoveButton.module.css';

const FavoriteRemoveButton = (props) => {
  return (
    <>
      <button type="button" className={classes.button}>
        {props.info}
      </button>
    </>
  );
};

export default FavoriteRemoveButton;
