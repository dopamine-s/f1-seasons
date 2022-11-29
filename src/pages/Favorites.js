import { useEffect, useState } from 'react';

import FavoritesList from '../components/Favorites/FavoritesList';
import { MOCK_FAVORITES } from '../mock-data/mock-favorites';
import {
  // getFromStorage,

  setToStorage,
} from '../utils/localStorage';
import classes from './Favorites.module.css';

const Favorites = () => {
  const [scroll, setScroll] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setFavorites(
      // getFromStorage(
      // 'favorites') ??
      MOCK_FAVORITES,
    );
  }, []);

  // const addFavoriteHandler = (addedFavorite) => {
  //   setFavorites((prevFavorites) => {
  //     const updatedFavorites = [...prevFavorites];
  //     updatedFavorites.unshift(addedFavorite);

  //     return updatedFavorites;
  //   });
  // };

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

  if (favorites.length > 0) {
    content = (
      <FavoritesList favorites={favorites} onRemove={deleteFavoriteHandler} />
    );
  }

  return (
    <>
      <h1>Favorite drivers:</h1>
      <section className={classes.favorites}>{content}</section>
      {scroll > 320 && (
        <button className={classes['up-button']} onClick={handleUpButton}>
          Up!
        </button>
      )}
    </>
  );
};

export default Favorites;
