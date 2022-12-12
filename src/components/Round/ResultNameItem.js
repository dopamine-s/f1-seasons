import classes from './ResultNameItem.module.css';

const ResultNameItem = (props) => {
  return (
    <div className={classes.wrapper}>
      <h2>{props.title}:</h2>
      <div className={classes.info}>{props.fullName}</div>
    </div>
  );
};

export default ResultNameItem;
