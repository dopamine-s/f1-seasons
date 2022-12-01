import { useEffect, useState } from 'react';

import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import SeasonRoundsList from '../components/Seasons/SeasonRoundsList';
import SeasonSelect from '../components/Seasons/SeasonSelect';
import { MOCK_SEASON } from '../mock-data/mock-season';
import classes from './Seasons.module.css';

const Seasons = () => {
  const [scroll, setScroll] = useState(0);
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

  useEffect(() => {
    setIsLoading(true);
    setRounds(MOCK_SEASON);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  let content = <p className={classes.center}>No seasons found</p>;

  if (rounds.length > 0) {
    content = <SeasonRoundsList rounds={rounds} />;
  }

  return (
    <>
      <h1>Formula 1: seasons</h1>
      <SeasonSelect />
      {isLoading && <LoadingSpinner />}
      <section className={classes.seasons}>{!isLoading && content}</section>
      {scroll > 320 && (
        <button className={classes['up-button']} onClick={handleUpButton}>
          Up!
        </button>
      )}
    </>
  );
};

export default Seasons;
