import classes from './ResultIdItem.module.css';

const ResultIdItem = (props) => {
  let winnerClasses = '';

  if (props.info <= 3) {
    winnerClasses = classes['info-winner'];
  }

  const cssClasses = `${classes.info} ${winnerClasses}`;

  return (
    <>
      <div className={classes.wrapper}>
        <h2>{props.title}:</h2>
        <div className={cssClasses}>{props.info}</div>
      </div>
    </>
  );
};

export default ResultIdItem;
