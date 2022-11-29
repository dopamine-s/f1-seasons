import classes from './RoundInfoItem.module.css';

const RoundInfoItem = (props) => {
  return (
    <>
      <div className={classes.wrapper}>
        <h2>{props.title}:</h2>
        <div className={classes.info}>{props.info}</div>
      </div>
    </>
  );
};

export default RoundInfoItem;
