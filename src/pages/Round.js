import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getRoundResults } from '../api/api';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import NamesList from '../components/Round/NamesList';
import RoundFlagItem from '../components/Round/RoundFlagItem';
import RoundResultsList from '../components/Round/RoundResultsList';
import { getFromStorage, setToStorage } from '../utils/localStorage';
import classes from './Round.module.css';

const Round = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);
  const [raceName, setRaceName] = useState('');
  const [roundNumber, setroundNumber] = useState('');
  const [country, setCountry] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState(getFromStorage('favorites') || []);

  const { seasonId, roundId } = useParams();

  const loadResults = useCallback(
    async function () {
      setError(null);
      setIsLoading(true);

      try {
        const response = await getRoundResults(seasonId, roundId);
        const results = response.MRData.RaceTable.Races[0].Results;

        setRaceName(response.MRData.RaceTable.Races[0].raceName);
        setroundNumber(response.MRData.RaceTable.Races[0].round);
        setCountry(response.MRData.RaceTable.Races[0].Circuit.Location.country);
        setResults(results);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    },
    [seasonId, roundId],
  );

  useEffect(() => {
    loadResults();
  }, [loadResults]);

  const toggleFavoriteHandler = (selectedFavorite) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites];

      const existingFavorite = updatedFavorites.find(
        (existingFavorite) =>
          existingFavorite.driverId === selectedFavorite.driverId,
      );

      if (!existingFavorite) {
        updatedFavorites.unshift(selectedFavorite);
      } else if (existingFavorite) {
        const index = updatedFavorites.indexOf(existingFavorite);
        updatedFavorites.splice(index, 1);
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
    content = (
      <RoundResultsList
        results={results}
        favorites={favorites}
        onToggle={toggleFavoriteHandler}
      />
    );
  }

  return (
    <>
      {!isLoading && !error && (
        <>
          <h1>{raceName}</h1>
          <RoundFlagItem country={country} />
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
      {error && <h2 className={classes.error}>Error! Something went wrong.</h2>}
      {!error && (
        <>
          {!isLoading && <NamesList />}
          <section className={classes.round}>{!isLoading && content}</section>
        </>
      )}
    </>
  );
};

export default Round;
