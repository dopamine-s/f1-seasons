import { useCallback, useEffect, useState } from 'react';

import { getSeasonsList } from '../api/api';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import SeasonRoundsList from '../components/Seasons/SeasonRoundsList';
import SeasonSelect from '../components/Seasons/SeasonSelect';
import { MOCK_SEASON } from '../mock-data/mock-season';
import { currentYear } from '../utils/helpers';
import classes from './Seasons.module.css';

const Seasons = () => {
  const [scroll, setScroll] = useState(0);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(currentYear);
  const [error, setError] = useState();
  const [rounds, setRounds] = useState([]);
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

  const loadSeasons = useCallback(async function () {
    try {
      const seasons = await getSeasonsList();
      setSeasons(seasons);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  console.log('selectedSeason', selectedSeason);

  useEffect(() => {
    setIsLoading(true);
    loadSeasons();
    setRounds(MOCK_SEASON);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [loadSeasons]);

  let content = <p className={classes.center}>No seasons found</p>;

  if (rounds.length > 0) {
    content = <SeasonRoundsList rounds={rounds} />;
  }

  const seasonChangeHandler = (seasonYear) => {
    setSelectedSeason(seasonYear);
  };

  return (
    <>
      <h1>Formula 1: seasons</h1>
      <SeasonSelect
        seasons={seasons}
        onChangeSeason={seasonChangeHandler}
        selected={selectedSeason}
      />
      {isLoading && <LoadingSpinner />}
      {error && <p>{error}</p>}
      {!error && <section className={classes.seasons}>{content}</section>}
      {scroll > 320 && (
        <button className={classes['up-button']} onClick={handleUpButton}>
          Up!
        </button>
      )}
    </>
  );
};

export default Seasons;
