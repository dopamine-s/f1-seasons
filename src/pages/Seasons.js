import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getRounds, getSeasonsList } from '../api/api';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import SeasonRoundsList from '../components/Seasons/SeasonRoundsList';
import SeasonSelect from '../components/Seasons/SeasonSelect';
import { currentYear } from '../utils/helpers';
import classes from './Seasons.module.css';

const Seasons = () => {
  const navigate = useNavigate();
  const { seasonId } = useParams();
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(seasonId ?? currentYear);
  const [error, setError] = useState(null);
  const [rounds, setRounds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    seasonId && setSelectedSeason(seasonId);
  }, [seasonId]);

  const seasonChangeHandler = (seasonYear) => {
    setSelectedSeason(seasonYear);
    navigate(`/${seasonYear}`);
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
      setIsLoading(true);

      try {
        const rounds = await getRounds(selectedSeason);
        setRounds(rounds);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    },
    [selectedSeason],
  );

  useEffect(() => {
    loadSeasons();
    loadRounds();
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
    </>
  );
};

export default Seasons;
