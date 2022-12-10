import classes from './ResultNameItem.module.css';

const ResultNameItem = (props) => {
  const fullName = `${props.name} ${props.familyName}`;

  return (
    <>
      <div className={classes.wrapper}>
        <h2>{props.title}:</h2>
        <div className={classes.info}>{fullName}</div>
      </div>
    </>
  );
};

export default ResultNameItem;
