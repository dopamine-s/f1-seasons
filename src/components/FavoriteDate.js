import classes from './FavoriteDate.module.css';

const FavoriteDate = (props) => {
  const month = props.date.toLocaleString('en-Us', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-Us', { day: '2-digit' });

  return (
    <>
      <div className={classes.wrapper}>
        <h2>Born:</h2>
        <div className={classes.date}>
          <div>{day}</div>
          <div className={classes['date-month']}>{month}</div>
          <div>{year}</div>
        </div>
      </div>
    </>
  );
};

export default FavoriteDate;
