import Favorite from './Favorite';
import classes from './FavoritesList.module.css';

const FavoriteList = (props) => {
  return (
    <ul className={classes.favorites}>
      {props.favorites.map((favorite) => (
        <Favorite
          key={favorite.driverId}
          driverId={favorite.driverId}
          permanentNumber={favorite.permanentNumber}
          code={favorite.code}
          givenName={favorite.givenName}
          familyName={favorite.familyName}
          nationality={favorite.nationality}
          date={favorite.date}
          onRemove={props.onRemove}
        />
      ))}
    </ul>
  );
};

export default FavoriteList;
