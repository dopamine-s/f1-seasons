import classes from './FavoriteRemoveButton.module.css';

const FavoriteRemoveButton = (props) => {
  return (
    <>
      <div className={classes.wrapper}>
        <h2>{props.title}</h2>
        <button type="button" className={classes.button}>
          {props.info}
        </button>
      </div>
    </>
  );
};

export default FavoriteRemoveButton;
