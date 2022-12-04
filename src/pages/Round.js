import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getRoundResults } from '../api/api';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import NamesList from '../components/Round/NamesList';
import RoundResultsList from '../components/Round/RoundResultsList';
import UpButton from '../UI/UpButton';
import { getFromStorage, setToStorage } from '../utils/localStorage';
import classes from './Round.module.css';

const Round = () => {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(0);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);
  const [raceName, setRaceName] = useState('');
  const [roundNumber, setroundNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState(getFromStorage('favorites') || []);

  const { seasonId, roundId } = useParams();

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

  const loadResults = useCallback(
    async function () {
      setError(null);

      try {
        const response = await getRoundResults(seasonId, roundId);
        const results = response.MRData.RaceTable.Races[0].Results;

        setRaceName(response.MRData.RaceTable.Races[0].raceName);
        setroundNumber(response.MRData.RaceTable.Races[0].round);
        setResults(results);
      } catch (err) {
        setError(err.message);
      }
    },
    [seasonId, roundId],
  );

  useEffect(() => {
    setIsLoading(true);
    loadResults();
    setIsLoading(false);
  }, [loadResults]);

  const addFavoriteHandler = (addedFavorite) => {
    console.log('addedFavorite', addedFavorite);
    console.log('id', addedFavorite.id);

    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites];
      console.log('updatedFavorites', updatedFavorites);

      const existingFavorite = updatedFavorites.find(
        (existingFavorite) => existingFavorite.id === addedFavorite.id,
      );

      console.log(existingFavorite, 'existingFavoriteId');

      if (!existingFavorite) {
        updatedFavorites.unshift(addedFavorite);
      }

      return updatedFavorites;
    });

    return favorites;
  };

  useEffect(() => {
    setToStorage('favorites', favorites);
  }, [favorites]);

  let content = <p className={classes.center}>No seasons found</p>;

  if (results.length > 0) {
    content = <RoundResultsList results={results} onAdd={addFavoriteHandler} />;
  }

  return (
    <>
      {!isLoading && !error && (
        <>
          <h1>{raceName}</h1>
          <p className={classes['round-info']}>Round: {roundNumber}</p>
          <p className={classes['round-info']}>{seasonId}</p>
        </>
      )}
      <button
        className={classes['nav-button']}
        onClick={() => navigate('/')}
        type="button"
      >
        Back to the seasons
      </button>
      {isLoading && <LoadingSpinner />}
      {error && (
        <div>
          <h2 className={classes.error}>Error! Something went wrong.</h2>
          <p className={classes.center}>{error}</p>
        </div>
      )}
      {!error && (
        <>
          {!isLoading && <NamesList />}
          <section className={classes.round}>{!isLoading && content}</section>
        </>
      )}
      {scroll > 320 && (
        <UpButton
          className={classes['up-button--round']}
          onClick={handleUpButton}
        />
      )}
    </>
  );
};

export default Round;
