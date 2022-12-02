import classes from './SeasonRoundDetailsButton.module.css';

const SeasonRoundDetailsButton = (props) => {
  const clickHandler = () => {
    props.onSelect(props.round);
  };

  return (
    <>
      <button className={classes.button} onClick={clickHandler}>
        {props.info}
      </button>
    </>
  );
};

export default SeasonRoundDetailsButton;
