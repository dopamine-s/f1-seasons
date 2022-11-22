import classes from './FavoriteInfoItem.module.css';

const FavoriteInfoItem = (props) => {
  return (
    <>
      <div className={classes.wrapper}>
        <h2>{props.title}:</h2>
        <div className={classes.info}>{props.info}</div>
      </div>
    </>
  );
};

export default FavoriteInfoItem;
