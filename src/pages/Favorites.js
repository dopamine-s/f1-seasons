import { useEffect, useState } from 'react';

import FavoritesList from '../components/FavoritesList';
import { MOCK_FAVORITES } from '../mock-data/mock-favorites';
import {
  // getFromStorage,

  setToStorage,
} from '../utils/localStorage';
import classes from './Favorites.module.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(
      // getFromStorage(
      // 'favorites') ??
      MOCK_FAVORITES,
    );
  }, []);

  useEffect(() => {
    setToStorage('favorites', favorites);
  }, [favorites]);

  // const addFavoriteHandler = (addedFavorite) => {
  //   setFavorites((prevFavorites) => {
  //     const updatedFavorites = [...prevFavorites];
  //     updatedFavorites.unshift(addedFavorite);

  //     return updatedFavorites;
  //   });
  // };

  const deleteFavoriteHandler = (removedFavorite) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (favorite) => favorite !== removedFavorite,
      );

      return updatedFavorites;
    });
  };

  let content = <p style={{ textAlign: 'center' }}>No favorites found</p>;

  if (favorites.length > 0) {
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
