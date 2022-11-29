import classes from './FavoriteDate.module.css';

const FavoriteDate = (props) => {
  const date = new Date(props.date);

  const month = date.toLocaleString('en-Us', { month: 'long' });
  const year = date.getFullYear();
  const day = date.toLocaleString('en-Us', { day: '2-digit' });

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
