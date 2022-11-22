import Favorite from './Favorite';

const FavoriteList = (props) => {
  return (
    <ul>
      {props.favorites.map((favorite) => (
        <Favorite
          key={favorite.driverId}
          permanentNumber={favorite.permanentNumber}
          code={favorite.code}
          givenName={favorite.givenName}
          familyName={favorite.familyName}
          nationality={favorite.nationality}
          date={favorite.date}
        />
      ))}
    </ul>
  );
};

export default FavoriteList;
