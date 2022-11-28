import classes from './SeasonRoundDetailsButton.module.css';

const FavoriteRemoveButton = (props) => {
  const navigateHandler = () => {
    console.log(props);
  };

  return (
    <>
      <button className={classes.button} onClick={navigateHandler}>
        {props.info}
      </button>
    </>
  );
};

export default FavoriteRemoveButton;
