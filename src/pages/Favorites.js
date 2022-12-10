import { useEffect, useState } from 'react';

import FavoritesList from '../components/Favorites/FavoritesList';
import { getFromStorage, setToStorage } from '../utils/localStorage';
import classes from './Favorites.module.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState(getFromStorage('favorites') || []);

  const deleteFavoriteHandler = (removedDriverId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (driver) => driver.driverId !== removedDriverId,
      );

      return updatedFavorites;
    });
  };

  useEffect(() => {
    setToStorage('favorites', favorites);
  }, [favorites]);

  let content = <p className={classes.center}>No favorites found</p>;

  if (favorites && favorites.length > 0) {
    content = (
      <FavoritesList favorites={favorites} onRemove={deleteFavoriteHandler} />
    );
  }

  return (
    <>
      <h1>Favorite drivers:</h1>
      <section className={classes.favorites}>{content}</section>
    </>
  );
};

export default Favorites;
