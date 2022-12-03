import { useEffect, useState } from 'react';

import FavoritesList from '../components/Favorites/FavoritesList';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { MOCK_FAVORITES } from '../mock-data/mock-favorites';
import UpButton from '../UI/UpButton';
import {
  // getFromStorage,

  setToStorage,
} from '../utils/localStorage';
import classes from './Favorites.module.css';

const Favorites = () => {
  const [scroll, setScroll] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    setFavorites(
      // getFromStorage(
      // 'favorites') ??
      MOCK_FAVORITES,
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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
      {isLoading && <LoadingSpinner />}
      <section className={classes.favorites}>{!isLoading && content}</section>
      {scroll > 320 && (
        <UpButton
          className={classes['up-button--favorites']}
          onClick={handleUpButton}
        />
      )}
    </>
  );
};

export default Favorites;
