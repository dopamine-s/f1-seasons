import { useCallback, useEffect, useState } from 'react';

import { getRounds, getSeasonsList } from '../api/api';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import SeasonRoundsList from '../components/Seasons/SeasonRoundsList';
import SeasonSelect from '../components/Seasons/SeasonSelect';
import UpButton from '../UI/UpButton';
import { currentYear } from '../utils/helpers';
import classes from './Seasons.module.css';

const Seasons = () => {
  const [scroll, setScroll] = useState(0);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(currentYear);
  const [error, setError] = useState(null);
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

  const seasonChangeHandler = (seasonYear) => {
    setSelectedSeason(seasonYear);
  };

  const loadSeasons = useCallback(async function () {
    setError(null);

    try {
      const seasons = await getSeasonsList();
      setSeasons(seasons);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const loadRounds = useCallback(
    async function () {
      setError(null);

      try {
        const rounds = await getRounds(selectedSeason);
        setRounds(rounds);
      } catch (err) {
        setError(err);
      }
    },
    [selectedSeason],
  );

  useEffect(() => {
    setIsLoading(true);
    loadSeasons();
    loadRounds();
    setIsLoading(false);
  }, [loadSeasons, loadRounds, selectedSeason]);

  let content = <p className={classes.center}>No seasons found</p>;

  if (rounds.length > 0) {
    content = (
      <SeasonRoundsList rounds={rounds} selectedSeason={selectedSeason} />
    );
  }

  return (
    <>
      <h1>Formula 1: seasons</h1>
      <SeasonSelect
        seasons={seasons}
        onChangeSeason={seasonChangeHandler}
        selected={selectedSeason}
      />
      {isLoading && <LoadingSpinner />}
      {error && (
        <h2 className={classes.error}>
          Error! <br />
          What went wrong?
        </h2>
      )}
      {!isLoading && (
        <section className={classes.seasons}>{!error && content}</section>
      )}
      {scroll > 320 && (
        <UpButton
          className={classes['up-button--seasons']}
          onClick={handleUpButton}
        />
      )}
    </>
  );
};

export default Seasons;
